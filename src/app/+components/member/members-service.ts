import { Injectable } from '@angular/core';
import { MemberModel } from './Member.model';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: MemberModel[] = [
  { guid: 'm-001', fullname: 'علی رضایی',          address: 'تهران، خیابان آزادی، کوچه بهار ۱۲', mobile: '09121234561', joinDate: '1402/05/10', isActive: true },
  { guid: 'm-002', fullname: 'مریم حسینی',         address: 'اصفهان، چهارباغ بالا، پلاک ۴۵',    mobile: '09131234562', joinDate: '1401/11/22', isActive: true },
  { guid: 'm-003', fullname: 'رضا محمدی',          address: 'شیراز، بلوار چمران، نبش گلستان',  mobile: '09171234563', joinDate: '1403/01/05', isActive: false },
  { guid: 'm-004', fullname: 'سارا کاظمی',          address: 'مشهد، احمدآباد، خیابان رضا ۳۲',    mobile: '09151234564', joinDate: '1402/09/18', isActive: true },
  { guid: 'm-005', fullname: 'محمدامین شریفی',      address: 'تبریز، ولیعصر، کوچه بهشت ۷',       mobile: '09141234565', joinDate: '1400/07/30', isActive: true },
  { guid: 'm-006', fullname: 'فاطمه احمدی',         address: 'کرج، جهانشهر، بلوار طالقانی',      mobile: '09191234566', joinDate: '1403/03/12', isActive: true },
  { guid: 'm-007', fullname: 'حسین یوسفی',          address: 'قم، خیابان صفاییه، کوچه ۱۵',        mobile: '09181234567', joinDate: '1401/04/20', isActive: false },
  { guid: 'm-008', fullname: 'نرگس مرادی',           address: 'رشت، گلسار، خیابان ملت پلاک ۸۸',   mobile: '09131234568', joinDate: '1402/12/04', isActive: true },
  { guid: 'm-009', fullname: 'امیرحسین نوری',       address: 'یزد، صفائیه، خیابان فرخی',         mobile: '09151234569', joinDate: '1401/08/15', isActive: true },
  { guid: 'm-010', fullname: 'زهرا کریمی',           address: 'کرمان، بلوار جمهوری، نبش بهارستان',mobile: '09171234570', joinDate: '1403/02/28', isActive: true },
];

  list(){
    return this.data;
  }

}
