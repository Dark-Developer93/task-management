import * as dateUtil from '../util/DateUtil';

describe('Date util', () => {
  it('should add days to date', () => {
    const tomorrow = dateUtil.addDays(Date.now(), 1);
    expect(dateUtil.getDaysFromNow(tomorrow)).toEqual(1);
  });

  it('should get days between date from now', () => {
    const yesterday = dateUtil.addDays(Date.now(), -1);
    expect(dateUtil.getDaysFromNow(yesterday)).toEqual(-1);
  });

  it('should convert date to date string format of YYYY-MM-DD', () => {
    expect(dateUtil.toDateString(new Date('2018-01-01'))).toEqual('2018-01-01');
  });
});
