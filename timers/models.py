from datetime import datetime, timedelta

from django.db import models
from django.utils.timezone import now

from categories.models import Category


class Timer(models.Model):

    category = models.ForeignKey(Category)

    name = models.CharField(
        verbose_name='Name',
        max_length=100,
    )

    active = models.BooleanField(
        verbose_name='Active',
        default=False,
        db_index=True,
    )

    def start(self):
        interval = Interval()
        interval.timer = self
        interval.save()

        self.active = True
        self.save()

    def stop(self):
        interval = Interval.objects.get(
            timer=self,
            end=None,
        )
        interval.end = now()
        interval.save()

        self.active = False
        self.save()

    @property
    def today(self):
        """
        Today's total time.
        """
        today = now()
        intervals = Interval.objects.filter(
            timer=self,
            start__year=today.year,
            start__month=today.month,
            start__day=today.day,
        )
        total = timedelta(0)
        for interval in intervals:
            total += interval.length
        return total

    @property
    def last_week(self):
        """
        Last week's total time.
        """
        year, week, dow = (now() - timedelta(days=7)).isocalendar()
        intervals = Interval.objects.filter(
            timer=self,
            start__year=year,
            week=week,
        )
        total = timedelta(0)
        for interval in intervals:
            total += interval.length
        return total


class Interval(models.Model):

    timer = models.ForeignKey(Timer)

    week = models.IntegerField(
        verbose_name='Week',
        db_index=True,
    )

    year = models.IntegerField(
        verbose_name='Year',
        db_index=True,
    )

    start = models.DateTimeField(
        verbose_name='Start Time',
        auto_now_add=True,
    )

    end = models.DateTimeField(
        verbose_name='End Time',
        blank=True,
        null=True,
    )

    notes = models.CharField(
        verbose_name='Notes',
        max_length=1000,
        blank=True,
        null=True,
    )

    def __init__(self, *args, **kwargs):
        today = now()
        year, week, dow = today.isocalendar()
        kwargs['week'] = week
        kwargs['year'] = today.year
        kwargs['start'] = now()
        return super().__init__(*args, **kwargs)

    @property
    def length(self):
        end = self.end or now()
        return end - self.start
