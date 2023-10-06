import { Injectable } from '@angular/core';
import {word} from "../modals/lang"
import { LoadingService } from './loading.service';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public lang!:string
  constructor(private loading:LoadingService,private translateService:TranslateService){
    this.lang ="ar"

  }

  public changeLanguage(){
    this.loading.isLoading = true;
    this.lang = this.lang === "ar" ?  this.lang = "en" :   this.lang = "ar"
    localStorage.setItem('lang',this.lang || 'ar')
    this.endLoading()
    this.translateService.use(localStorage.getItem('lang')|| 'en')
  }

endLoading(){
  setInterval(()=>{
    this.loading.isLoading = false
  },600)
}
  public hollat  = {
    ar:"حُلت" ,
    en:"hollat"
   }
  public jumbotronText  = {
    ar:"منصة إدارة التذاكر. سريع الإعداد وسهل الاستخدام" ,
    en:"Ticketing Management Platform. Fast Setup and easy to use."
   }
   public viewProductScreens  = {
    ar:"عرض الشاشات" ,
    en:"view product screens"
   }
   public home  = {
    ar:"الرئسية" ,
    en:"home"
   }
   public about  = {
    ar:"عن المؤسسة" ,
    en:"about us"
   }
   public productFeatures  = {
    ar:"مزايا المشروع" ,
    en:"product features"
   }
   public contact  = {
    ar:"التواصل" ,
    en:"contact"
   }
   public aboutHollat  = {
    ar:"عن حُلت" ,
    en:"about Hollat"
   }
   public aboutHollatMainPargraph  = {
    ar:"حل بسيط لخدمات العملاء الفعالة والاستباقية ، جميع جهات الاتصال في نظام واحد نظام يمكّن المؤسسات من خدمة العملاء من خلال إدارة تذاكر العملاء وطلبات الخدمة والشكاوى والاستفسارات. يتيح النظام تصنيف التذاكر حسب الأولوية والخطورة. يقوم النظام بتوزيع التذاكر على الأقسام حسب طبيعة التذكرة واتفاقية مستوى الخدمة. يمكن الاطلاع على تقارير متعددة ومؤشر الأداء الرئيسي. يتوقع العملاء الآن استجابات أسرع وتفاعلات شخصية ودردشات سلسة عبر قنوات مختلفة. برنامج لدعم العملاء يمنحك كل ما تحتاجه لتقديم دعم استثنائي." ,
    en:"It is a system that enables organizations to manage customer tickets and requests from complaints, inquiries and service requests.The system enables the classification of tickets according to priority and severity.The system distributes tickets to the departments according to the nature of the ticket and the service level agreement. Multiple reports can be viewed and key performance indicator.Customers now expect faster responses, personal interactions, and seamless chats across different channels.A customer support program that gives you everything you need to provide exceptional support"
   }

   public ThemainObjectivesTitle = {
    ar:"الخصائص الرئيسية",
    en:"The main Objectives"
   }
   public ThemainObjectiveText = {
     ar:"الهدف الرئيسي من هذا النظام هو عمل أتمته لخدمات المستفيدين بالمؤسسات من خلال نظام تكنولوجي متطور ومتعدد القنوات لتجربة العملاء ( المستفيدين ) تقديم خدمة أفضل عن طريق الربط بين كل تعاملات المستفيد بسلاسة في كافة نقاط التواصل في التعامل مع خدمات العميل (القنوات الرقمية، ومركز الاتصال، و كذلك التعاملات الميدانية ان وجدت) ، عبر رحلة تجربة العميل ندعم إظهار رؤية واضحة عن المستفيدين لبياناتهم وطلباتهم وسجل تعاملاتهم ومن كافة الجوانب (360) درجة، تحقيق الأهداف الاستراتيجية والتوافق مع رؤية المملكة 2030 في أتمته الأنظمة وتقديم أفضل الخدمات للمستفيدين على كافة قنوات التواصل وتحقيق أعلى مستوى رضا المستفيدين عن خدمات العميل. تحقيق أفضل وقت للاستجابة لاستفسارات وطلبات المستفيدين والرد بالمعلومات المطلوبة ، وكذلك تنفيذ طلب المستفيد في الوقت المستهدف وبأقل جهد ووقت ممكن. فهم رحلة المستفيد (العميل) من خلال الميزات المتقدمة التي توفرها في نظام علاقات العملاء، سيوفر النظام للإدارات المسؤولة رؤية واضحة عن تجربة المستفيد وبيان رحلته من أول تواصل على كافة نقاط التواصل (قنوات التواصل المتعددة) وبكل سلاسة ويمكن بناء كافة التوقعات والاحتمالات التي تفيد في تطوير تجربة المستفيد للمراحل القادمة وتمكين العميل من تقديم خدماته للمستفيدين بطرق أكثر كفاءة وجودة عالية.",
    en:"The main objective of this system is to automate the services of beneficiaries in enterprises through an advanced multi-channel technology system for customer (beneficiary) experienceProviding a better service by seamlessly linking all transactions of the beneficiary at all points of contact in dealing with customer services (digital channels, call center, as well as field transactions if any),Through the journey of the customer experience, we support showing a clear view of the beneficiaries of their data, requests, and record of their dealings in all aspects (360) degrees,Achieving strategic goals and aligning with the Kingdom\'s 2030 vision in automating systems and providing the best services to beneficiaries on all communication channels and achieving the highest level of customer satisfaction with customer services.Achieving the best response time to inquiries and requests from beneficiaries and responding with the required information, as well as implementing the request of the beneficiary in the targeted time and with minimal effort and time possible.Understanding the beneficiary’s journey (customer): Through the advanced features that it provides in Hollat CRM system, the system will provide the responsible departments with a clear vision of the beneficiary’s experience and clarify his journey from the first communication on all points of communication (multiple communication channels) and with ease and can build all expectations and possibilities that benefit in developing the beneficiary experience for the next stages and enable The customer to provide his services to the beneficiaries in more efficient and high quality."
  }
   public ThemaingoalTitle = {
    ar:"الاهداف الرئسية",
    en:"The main Objectives:"
  }
  public showMore = {
   ar:"عرض المزيد",
   en:"show more"
  }
  public showLess = {
   ar:"عرض اقل",
   en:"show less"
  }
  public mainFeatures = {
   ar:"الخصائص الرئسية",
   en:"main features"
  }
  public someScreens = {
   ar:"بعض الشاشات",
   en:"some screens"
  }
  public allScreens = {
   ar:"الكل",
   en:"all "
  }
  public settingsScreens = {
   ar:"الإعدادات",
   en:"settings"
  }
  public reportsScreens = {
   ar:"التقارير",
   en:"reports"
  }
  public ticketsScreens = {
   ar:"تذاكر",
   en:"tickets"
  }
  public whyChooseHollet = {
   ar:"لماذا تختار حُلت",
   en:"why choose hollet"
  }
  public cooperation = {
   ar:"التعاون",
   en:"cooperation"
  }
  public cooperationText = {
   ar:"يحتوي النظام والتكنولوجيا المستخدمة على ميزة توفر عالية تسمح بعدد كبير من المستخدمين وتكون متاحة في حالة استخدام أحد الخوادم",
   en:"The system and the technology used have a high availability feature that allows a large number of users and is available in the event of one of the servers being used"
  }
  public integration = {
   ar:"التكامل",
   en:"integration"
  }
  public integrationText = {
   ar:"التكامل مع كافة الأنظمة والخدمات الأخرى (الرسائل النصية، البريد الإلكتروني، إدارة موارد المؤسسة، مركز الاتصال ، قنوات التواصل الاجتماعي    ",
   en:"The system was built to suit your business needs, with the feature of customizing and controlling the whole system without programmatic interference."
  }
  public customPortal = {
   ar:"التخصيص",
   en:"Custom Portal"
  }
  public customPortalText = {
    ar:"تم بناء النظام ليتناسب مع احتياجات عملك، مع وجود خاصية التخصيص والتحكم في كل النظام دون تدخل برمجي",
    en:"The system was built to suit your business needs, with the feature of customizing and controlling the whole system without programmatic interference."
  }
  
  public callToActionTitle = {
   ar:"لنبدء العمل معاً ؟",
   en:"LET'S WORK TOGETHER ?"
  }
  public callToActionText = {
    ar:"نسعى لراحة موظفو تقديم الخدمة ومشاركة فعالة تدعم زيادة الإنتاجية وفق مؤشرات قياس الأداء العالمية ",
    en:"Happy agents and co-promoters with productivity and automation to meet your needs."
  }
  public requestDemo = {
   ar:"طلب نسخة تجريبية",
   en:"request a demo"
  }
  public slogan= {
   ar:"سريع الإعداد ، سهل الاستخدام ، يمكنك البدء بسرعة",
   en:"Fast setup, easy to use, you can start quickly."
  }
  public copyRight= {
   ar:"حُلَّت © 2020 | جميع الحقوق محفوظة. | سياسة الخصوصية | الشروط والاحكام",
   en:"Hollat © 2020 | All Rights Reserved. | Privacy Policy | Terms & Conditions."
  }
  public aboutpageSlogan= {
   ar:"ستتمكن الشركات من خدمة العملاء بشكل أفضل",
   en:"Companies will be able to better serve customers"
  }
  public headOffice= {
   ar:"المكتب الرئيسي",
   en:"HEAD OFFICE"
  }
  public adress= {
   ar:"المملكة العربية السعودية - الرياض حي المروج - شارع الأمير جلوي بن تركي بن عبد العزيز صندوق البريد 241840 الرياض الرمز البريدي 11322",
    en:"Kingdom of Saudi Arabia - Riyadh Al Muruj District - Prince Jalawi Bin Turki Bin Abdulaziz St P.O.Box 241840 Riyadh 11322"
  }
  public send= {
    ar:"إرسال",
    en:"send",
  }


}

