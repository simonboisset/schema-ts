import { maybe } from './maybe';
import { date } from './date';
test('string returns false for non-date', () => {
  expect(date()(undefined).errors).toBe('date');
  expect(date('date-error')(undefined).errors).toBe('date-error');
  expect(date()(undefined).data).toBeUndefined();
  expect(date()(null).data).toBeUndefined();
  expect(date()(NaN).data).toBeUndefined();
  expect(date()(true).data).toBeUndefined();
  expect(date()({ key: 'this-is-a-key' }).data).toBeUndefined();
  expect(date()(['this-is-a-key']).data).toBeUndefined();
  expect(date()(['this-is-a-key']).data).toBeUndefined();
  expect(date()('').data).toBeUndefined();
});

test('date returns true for date', () => {
  const dateValue = new Date('2022-01-12');
  expect(date()(dateValue).data?.valueOf()).toBe(dateValue.valueOf());
  expect(date()(dateValue.toJSON()).data?.valueOf()).toBe(dateValue.valueOf());
  expect(date()(dateValue.toISOString()).data?.valueOf()).toBe(dateValue.valueOf());
  expect(date()(dateValue.valueOf()).data?.valueOf()).toBe(dateValue.valueOf());
  expect(date()('2022-01-12').data?.valueOf()).toBe(dateValue.valueOf());
  expect(maybe(date())(undefined).errors).toBeUndefined();
  expect(maybe(date())(undefined).data).toBeUndefined();
});
