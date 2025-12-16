import imgMicrosolutionLogo1 from "figma:asset/3c8f572fa709f1fcc9d13a7d8671fd834447e28e.png";
import imgFrame16 from "figma:asset/731a94b6ef866d61b87135be7b704b5b856b81b5.png";
import imgMicroSolutionsOffice from "figma:asset/aab56357e46973d47203a84d09fd734d4bf3ad2f.png";
import imgRectangle18 from "figma:asset/d5a58f10a6e48a20391bd7aaca32353a901a9c5e.png";
import imgCardBody from "figma:asset/f18d9f2546b222348d2781bfd9780eae72779acf.png";
import imgCardBody1 from "figma:asset/55e00dc0eb5c24271b875522c6d4d472e4ecb492.png";
import imgCardBody2 from "figma:asset/46eb76052b99d12158b5280236fc41f161e0277c.png";
import imgCard from "figma:asset/7e86dcc18082fd6f2437420b9cf5b2bb8dfadac6.png";
import img from "figma:asset/de6ac59c25ca88d54156bddc8250ae273fd0dac1.png";
import img1 from "figma:asset/390dba836a7ca7a16c112eeffead36fe730666a7.png";
import img2 from "figma:asset/10bee8643401262ec4749e9d46e090c22a843ba9.png";
import img3 from "figma:asset/df2a4cf187fae4e685a5fa131d24fc635b6b41bd.png";
import img4 from "figma:asset/1e6135036b26db601f23f146ab62b4aad491da34.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-white w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[280px] justify-center not-italic relative shrink-0 text-[59.182px] tracking-[-0.5918px] w-full">
        <p className="leading-[88.773px]">Build Custom Software, Designed Around Your Users</p>
      </div>
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-[651.979px]">
        <p className="leading-[30px]">We build intuitive apps and system solutions crafted to solve real problems and deliver seamless, user-centered experiences.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[10px] h-[48px] items-center justify-center p-[16px] relative rounded-[40px] shrink-0 w-[190px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40px]" />
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px]">
        <p className="leading-[24px] whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center justify-center p-[16px] relative rounded-[40px] shrink-0 w-[190px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.16px]">
        <p className="leading-[24px] whitespace-pre">Book a Consultation</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 top-0 w-[873px]">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[436px] left-[128px] top-[265px] w-[873px]">
      <Frame5 />
    </div>
  );
}

function NavMenu() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-full" data-name="Nav Menu">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px] whitespace-pre">Home</p>
    </div>
  );
}

function NavMenuComponent() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[45px]" data-name="Nav menu Component">
      <NavMenu />
      <div className="bg-white h-[4px] rounded-[10px] shrink-0 w-[16px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px] whitespace-pre">Features</p>
    </div>
  );
}

function NavMenuComponent1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[62px]" data-name="Nav menu Component">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px] whitespace-pre">Pricing</p>
    </div>
  );
}

function NavMenuComponent2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[50px]" data-name="Nav menu Component">
      <Frame1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px] whitespace-pre">About</p>
    </div>
  );
}

function NavMenuComponent3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[45px]" data-name="Nav menu Component">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px] whitespace-pre">Resources</p>
    </div>
  );
}

function NavMenuComponent4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[77px]" data-name="Nav menu Component">
      <Frame10 />
    </div>
  );
}

function NavMenus() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-[360px]" data-name="Nav Menus">
      <NavMenuComponent />
      <NavMenuComponent1 />
      <NavMenuComponent2 />
      <NavMenuComponent3 />
      <NavMenuComponent4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#2a0079] content-stretch flex gap-[10px] h-[48px] items-center justify-center p-[16px] relative rounded-[40px] shrink-0 w-[190px]" data-name="Button">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px]">
        <p className="leading-[24px] whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[73px] items-center left-1/2 overflow-clip top-[68px] translate-x-[-50%] w-[872px]">
      <div className="h-[61px] relative shrink-0 w-[176px]" data-name="microsolution logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMicrosolutionLogo1} />
      </div>
      <NavMenus />
      <Button2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[845px] left-0 overflow-clip top-0 w-[1512px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-50 size-full" src={imgFrame16} />
      </div>
      <Frame6 />
      <Frame2 />
    </div>
  );
}

function MicroSolutionsOffice() {
  return (
    <div className="h-[444px] relative rounded-[10px] shrink-0 w-[560px]" data-name="MicroSolutions Office">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-[126.13%] left-0 max-w-none top-[-10.59%] w-full" src={imgMicroSolutionsOffice} />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#013f7e] content-stretch flex flex-col gap-[10px] items-start justify-center px-[53px] py-[12px] relative rounded-[40px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px]">
        <p className="leading-[24px] whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[65px] items-end relative shrink-0 w-[657px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">
        <p className="leading-[30px]">MicroSolutions Technology Limited is a sister company of InfoByte Technologies, focused on helping organizations move from manual workflows to efficient, digital systems. We design user-friendly solutions that simplify operations, improve productivity, and support sustainable growth.With a team experienced in digital transformation, system integration, and custom software development, we’ve delivered successful projects across various sectors. Our goal is simple: create technology that works seamlessly for the people who use it every day.</p>
      </div>
      <Button3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-center justify-center left-[102px] top-[1242px]">
      <MicroSolutionsOffice />
      <Frame12 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center justify-center relative shrink-0 text-center w-[725px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[45px] leading-[40px] not-italic relative shrink-0 text-[#050505] text-[36px] w-full">Contact Us</p>
      <p className="font-['Nunito:Regular',sans-serif] font-normal h-[56px] leading-[28px] relative shrink-0 text-[#585858] text-[20px] w-full">Let’s Build the Future Together.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Sora:SemiBold',sans-serif] leading-[53.677px] min-w-full not-italic relative shrink-0 text-[40.258px] text-white w-[min-content]">Ready to Build the Future?</p>
      <div className="font-['Nunito:Regular',sans-serif] font-normal leading-[34px] relative shrink-0 text-[#f4f8ff] text-[16px] w-[345px]">
        <p className="mb-0">Let’s collaborate to turn your vision into powerful digital experiences.</p>
        <p>From innovative software solutions to expert talent support, Dolph Tech is here to help you accelerate growth and drive lasting impact.</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[131px] top-[253px] w-[437.5px]">
      <Frame18 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[131px] top-[253px]">
      <Frame19 />
    </div>
  );
}

function FormHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Form heading">
      <p className="bg-clip-text font-['Helvetica_Neue:Medium',sans-serif] leading-[53.677px] relative shrink-0 text-[40.258px] w-[522px]" style={{ WebkitTextFillColor: "transparent" }}>
        Let’s Build the Future Together.
      </p>
      <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[34px] relative shrink-0 text-[#f4f8ff] text-[16px] text-nowrap whitespace-pre">
        <p className="mb-0">Reach out and let innovation and collaboration light up new possibilities.</p>
        <p>Together, we’ll shape the future, one brilliant idea at a time.</p>
      </div>
    </div>
  );
}

function Fname() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="Fname">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[14px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-nowrap tracking-[-0.15px] whitespace-pre">Last Name</p>
        </div>
      </div>
    </div>
  );
}

function Lname() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="Lname">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[14px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-nowrap tracking-[-0.15px] whitespace-pre">First Name</p>
        </div>
      </div>
    </div>
  );
}

function Names() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full z-[5]" data-name="Names">
      <Fname />
      <Lname />
    </div>
  );
}

function Email() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[5px] shrink-0 w-full z-[4]" data-name="Email">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[14px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-nowrap tracking-[-0.15px] whitespace-pre">Email</p>
        </div>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[5px] shrink-0 w-full z-[3]" data-name="Phone">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[14px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-nowrap tracking-[-0.15px] whitespace-pre">Phone Number</p>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[109px] relative rounded-[5px] shrink-0 w-full z-[2]" data-name="Message">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[109px] items-start px-[14px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-nowrap tracking-[-0.15px] whitespace-pre">Message</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0066ff] content-stretch flex h-[49px] items-center justify-center px-[50px] py-[20px] relative rounded-[6px] shrink-0 w-[521px] z-[1]" data-name="Button">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">Send it to Microsolution</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] isolate items-start relative shrink-0 w-full" data-name="Form">
      <Names />
      <Email />
      <Phone />
      <Message />
      <Button4 />
    </div>
  );
}

function FormWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] items-start pl-[40px] pr-0 py-[40px] relative shrink-0" data-name="Form wrapper">
      <FormHeading />
      <Form />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex gap-[26px] items-center left-1/2 top-[calc(50%+0.29px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="h-[677px] relative rounded-[38px] shrink-0 w-[560px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[38px] size-full" src={imgRectangle18} />
      </div>
      <FormWrapper />
    </div>
  );
}

function Div() {
  return (
    <div className="h-[794px] relative rounded-[55px] shadow-[1px_0px_39.6px_0px_rgba(28,187,255,0.25)] shrink-0 w-full" data-name="div">
      <Group />
      <Frame20 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[60px] h-[1299px] items-center left-0 overflow-clip pb-[120px] pt-[65px] px-[120px] top-[3775px] w-[1512px]">
      <Frame16 />
      <Div />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[79px] items-start px-0 py-[10px] relative w-[221px]">
      <div className="absolute flex items-center justify-center left-[calc(50%+69.5px)] top-[39px] translate-x-[-50%]">
        <div className="flex-none scale-y-[-100%]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative text-[#050505] text-[36px] text-center text-nowrap whitespace-pre">About Microsolution</p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-14px)] top-[288px] translate-x-[-50%]">
        <div className="flex-none scale-y-[-100%]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative text-[#050505] text-[36px] text-center text-nowrap whitespace-pre">Our clients</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[45.731px] items-start left-[106px] not-italic text-white top-[60px] w-[722px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] min-w-full relative shrink-0 text-[36px] w-[min-content]">Our Service</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[55.432px] relative shrink-0 text-[24px] w-[957px]">WE GIVE OUT TOP NOTCH SERVICES TO OUR CLIENTS</p>
    </div>
  );
}

function CardBody() {
  return (
    <div className="h-[306px] relative shrink-0 w-full" data-name="Card body">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCardBody} />
      <div className="size-full">
        <div className="h-[306px] w-full" />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[58.665px] relative rounded-[11.608px] shrink-0 w-[138.648px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[11.608px]" />
      <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[27.858px] left-[calc(50%+0.18px)] text-[18.572px] text-black text-center text-nowrap top-[calc(50%-13.99px)] translate-x-[-50%] whitespace-pre">{`Learn more `}</p>
    </div>
  );
}

function CardBody1() {
  return (
    <div className="bg-white h-[254px] relative shrink-0 w-full" data-name="Card body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] h-[254px] items-start pb-[60px] pt-[25px] px-[25px] relative w-full">
          <div className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
            <p className="mb-0">MicroSolutions Consultancy (MSConsult)</p>
            <p>&nbsp;</p>
          </div>
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]">MSConsult assists clients in planning, developing, and implementing computer systems for office automation. Our maintenance services includeorganized monthly checks.</p>
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col h-[542px] items-center justify-end overflow-clip relative rounded-[20px] shrink-0 w-[407px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgCardBody} />
      <CardBody />
      <CardBody1 />
    </div>
  );
}

function CardBody2() {
  return (
    <div className="h-[306px] relative shrink-0 w-full" data-name="Card body">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCardBody1} />
      <div className="size-full">
        <div className="h-[306px] w-full" />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[58.665px] relative rounded-[11.608px] shrink-0 w-[138.648px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[11.608px]" />
      <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[27.858px] left-[calc(50%+0.18px)] text-[18.572px] text-black text-center text-nowrap top-[calc(50%-13.99px)] translate-x-[-50%] whitespace-pre">Learn More</p>
    </div>
  );
}

function CardBody3() {
  return (
    <div className="bg-white h-[254px] relative shrink-0 w-full" data-name="Card body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] h-[254px] items-start pb-[60px] pt-[25px] px-[25px] relative w-full">
          <div className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
            <p className="mb-0">MicroSolutions Software (MSSoft)</p>
            <p>&nbsp;</p>
          </div>
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]">MSSoft develops software with international standards, offering Windows and Web Applications along with system planning, package evaluation, andmore.</p>
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col h-[542px] items-center justify-end overflow-clip relative rounded-[20px] shadow-[0px_32px_60px_0px_rgba(0,0,0,0.1)] shrink-0 w-[407px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgCardBody} />
      <CardBody2 />
      <CardBody3 />
    </div>
  );
}

function CardBody4() {
  return (
    <div className="h-[306px] relative shrink-0 w-full" data-name="Card body">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCardBody2} />
      <div className="size-full">
        <div className="h-[306px] w-full" />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white h-[58.665px] relative rounded-[11.608px] shrink-0 w-[138.648px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[11.608px]" />
      <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[27.858px] left-[calc(50%+0.18px)] text-[18.572px] text-black text-center text-nowrap top-[calc(50%-13.99px)] translate-x-[-50%] whitespace-pre">{`Learn more `}</p>
    </div>
  );
}

function CardBody5() {
  return (
    <div className="bg-white h-[253px] relative shrink-0 w-full" data-name="Card body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] h-[253px] items-start pb-[60px] pt-[25px] px-[25px] relative w-full">
          <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">MicroSolutions Communications and Engineering (MSCom)</p>
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]">MSCom provides technical support for hardware and network solutions, offering services from hardware evaluation to full network documentation.</p>
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col h-[542px] items-center justify-end overflow-clip relative rounded-[20px] shrink-0 w-[407px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgCardBody} />
      <CardBody4 />
      <CardBody5 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white h-[58.665px] relative rounded-[11.608px] shrink-0 w-[138.648px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[11.608px]" />
      <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[27.858px] left-[calc(50%+0.18px)] text-[18.572px] text-black text-center text-nowrap top-[calc(50%-13.99px)] translate-x-[-50%] whitespace-pre">{`Learn more `}</p>
    </div>
  );
}

function CardBody6() {
  return (
    <div className="basis-0 bg-white grow h-[254px] min-h-px min-w-px relative shrink-0" data-name="Card body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] h-[254px] items-start pb-[60px] pt-[25px] px-[25px] relative w-full">
          <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">MicroSolutions Manpower Development (MSMan)</p>
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black w-[567px]">MSConsult assists clients in planning, developing, and implementing computer systems for office automation. Our maintenance services includeorganized monthly checks.</p>
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex h-[542px] items-end justify-center overflow-clip relative rounded-[20px] shrink-0 w-[836px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgCard} />
      <CardBody6 />
    </div>
  );
}

function CardBody7() {
  return (
    <div className="h-[362px] relative shrink-0 w-full" data-name="Card body">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCardBody2} />
      <div className="size-full">
        <div className="h-[362px] w-full" />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white h-[59px] relative rounded-[11.608px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[red] border-solid inset-0 pointer-events-none rounded-[11.608px]" />
      <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[27.858px] left-[calc(50%+1.01px)] text-[18.572px] text-[red] text-center text-nowrap top-[calc(50%-13.15px)] translate-x-[-50%] whitespace-pre">CONTACT US</p>
    </div>
  );
}

function CardBody8() {
  return (
    <div className="bg-white h-[180px] relative shrink-0 w-full" data-name="Card body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] h-[180px] items-start pb-[60px] pt-[25px] px-[25px] relative w-full">
          <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">{`REACH OUT NOW TO ENJOY OUR GREAT PACKAGE `}</p>
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="content-stretch flex flex-col h-[542px] items-center justify-end overflow-clip relative rounded-[20px] shrink-0 w-[407px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgCardBody} />
      <CardBody7 />
      <CardBody8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[22px] items-start left-[102px] top-[317px] w-[1265px]">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[1541px] left-0 overflow-clip rounded-[55px] shadow-[1px_0px_39.6px_0px_rgba(28,187,255,0.25)] top-[1736px] w-[1512px]">
      <Frame21 />
      <Frame14 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[116px] leading-[0] not-italic relative shrink-0 w-[678.67px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] h-[21px] justify-center left-0 text-[#eeeeee] text-[19.2px] top-[10.5px] translate-y-[-50%] w-[199.685px]">
        <p className="leading-[normal]">About MicroSolutions</p>
      </div>
      <div className="absolute flex flex-col font-['Arial:Narrow',sans-serif] h-[64px] justify-center leading-[normal] left-0 text-[#cccccc] text-[14.4px] top-[64px] translate-y-[-50%] w-[389.208px]">
        <p className="mb-0">{`Mayor's Place Events, Along Olorunda Abaa Road,`}</p>
        <p className="mb-0">Akobo Ojurin, Ibadan, Oyo State, Nigeria.</p>
        <p className="mb-0">Phone: +2348030896056</p>
        <p>Email: info@microsolutionsngr.com</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[38.39px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Arial:Narrow',sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#cccccc] text-[14.4px] top-[8px] translate-y-[-50%] w-[38.707px]">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="absolute h-[16px] left-0 top-[21px] w-[55.19px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Arial:Narrow',sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#cccccc] text-[14.4px] top-[8px] translate-y-[-50%] w-[55.559px]">
        <p className="leading-[normal]">Services</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="absolute h-[16px] left-0 top-[42px] w-[59.2px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Arial:Narrow',sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#cccccc] text-[14.4px] top-[8px] translate-y-[-50%] w-[59.582px]">
        <p className="leading-[normal]">About Us</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="absolute h-[16px] left-0 top-[63px] w-[49.61px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Arial:Narrow',sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#cccccc] text-[14.4px] top-[8px] translate-y-[-50%] w-[49.962px]">
        <p className="leading-[normal]">Contact</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[79px] left-0 right-0 top-[32px]" data-name="List">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[116px] relative shrink-0 w-[678.67px]" data-name="Container">
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] h-[21px] justify-center leading-[0] left-0 not-italic text-[#eeeeee] text-[19.2px] top-[10.5px] translate-y-[-50%] w-[109.138px]">
        <p className="leading-[normal]">Quick Links</p>
      </div>
      <List />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[27px] left-[1041px] top-[42px] w-[24px]" data-name="Link">
      <div className="absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#cccccc] text-[24px] top-[13px] translate-y-[-50%] w-[24.344px]">
        <p className="leading-[24px]"></p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[27px] left-[1084.46px] top-[42px] w-[24px]" data-name="Link">
      <div className="absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#cccccc] text-[24px] top-[13px] translate-y-[-50%] w-[24.344px]">
        <p className="leading-[24px]"></p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[27px] left-[1127.91px] top-[42px] w-[21px]" data-name="Link">
      <div className="absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#cccccc] text-[24px] top-[13px] translate-y-[-50%] w-[21.325px]">
        <p className="leading-[24px]"></p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[30px] py-[10px] relative w-full">
          <Paragraph />
          <Container />
          <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[1041px] not-italic text-[#eeeeee] text-[19.2px] top-[20.5px] translate-y-[-50%] w-[90.95px]">
            <p className="leading-[normal]">Follow Us</p>
          </div>
          <Link />
          <Link1 />
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[rgba(28,187,255,0.25)] h-[46px] relative shrink-0 w-full" data-name="Background">
      <div className="absolute flex flex-col font-['Arial:Narrow',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.14px)] not-italic text-[14.4px] text-center text-white top-[23px] translate-x-[-50%] translate-y-[-50%] w-[271.666px]">
        <p className="leading-[normal]">© 2024 MicroSolutions. All rights reserved.</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[347px] items-center left-0 px-0 py-[20px] right-0 top-[4919px]" data-name="Footer">
      <Container1 />
      <Background />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[20.588px] h-[105px] items-center left-[102px] top-[943px] w-[1286.77px]">
      <div className="bg-white h-[105px] relative rounded-[12.712px] shrink-0 w-[240.882px]">
        <div aria-hidden="true" className="absolute border-[1.006px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12.712px]" />
      </div>
      <div className="bg-white h-[105px] relative rounded-[12.712px] shrink-0 w-[240.882px]">
        <div aria-hidden="true" className="absolute border-[1.006px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12.712px]" />
      </div>
      <div className="bg-white h-[105px] relative rounded-[12.712px] shrink-0 w-[240.882px]">
        <div aria-hidden="true" className="absolute border-[1.006px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12.712px]" />
      </div>
      <div className="bg-white h-[105px] relative rounded-[12.712px] shrink-0 w-[240.882px]">
        <div aria-hidden="true" className="absolute border-[1.006px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12.712px]" />
      </div>
      <div className="bg-white h-[105px] relative rounded-[12.712px] shrink-0 w-[240.882px]">
        <div aria-hidden="true" className="absolute border-[1.006px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12.712px]" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[102px] top-[943px]">
      <Frame7 />
      <div className="absolute h-[60.874px] left-[calc(8.33%+4.82px)] top-[964.62px] w-[182.622px]" data-name>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="absolute h-[60.874px] left-[calc(25%+14.29px)] top-[964.62px] w-[182.622px]" data-name>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute h-[60.874px] left-[calc(41.67%+23.76px)] top-[964.62px] w-[182.622px]" data-name>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="absolute h-[60.874px] left-[calc(75%+41.68px)] top-[964.62px] w-[182.622px]" data-name>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="absolute h-[60.874px] left-[calc(58.33%+34.26px)] top-[964.62px] w-[182.622px]" data-name>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 1">
      <Frame8 />
      <Frame13 />
      <Frame17 />
      <div className="absolute flex h-[79px] items-center justify-center left-[102px] top-[1143px] w-[221px]">
        <div className="flex-none scale-y-[-100%]">
          <Frame11 />
        </div>
      </div>
      <Frame15 />
      <p className="absolute bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[212px] left-1/2 not-italic text-[190.8px] text-center text-nowrap top-[3277px] translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        Microsolution
      </p>
      <p className="absolute bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#2a0079] leading-[212px] left-1/2 not-italic text-[190.8px] text-center text-nowrap to-[#82e4ff] top-[3489px] translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        TECHNOLOGY
      </p>
      <Footer />
      <Group1 />
    </div>
  );
}