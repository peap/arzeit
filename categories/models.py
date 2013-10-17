from datetime import timedelta

from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):

    user = models.ForeignKey(User)

    parent = models.ForeignKey(
        'self',
        blank=True,
        null=True,
        db_index=True,
    )

    name = models.CharField(
        verbose_name='Category',
        max_length=100,
    )

    description = models.CharField(
        verbose_name='Description',
        max_length=1000,
        blank=True,
        null=True,
    )

    @property
    def today(self):
        """
        Today's total time for all timers and sub-categories.
        """
        total = timedelta(0)
        for category in self.category_set.all():
            total += category.today
        for timer in self.timer_set.all():
            total += timer.today
        return total

    @property
    def last_week(self):
        """
        Last week's total time for all timers and sub-categories.
        """
        total = timedelta(0)
        for category in self.category_set.all():
            total += category.last_week
        for timer in self.timer_set.all():
            total += timer.last_week
        return total
