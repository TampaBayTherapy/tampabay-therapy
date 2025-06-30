export type FooterLink = {
    text: string;
    href: string;
    type: 'phone' | 'email' | 'map' | 'social' | 'internal';
  };
  
  export type FooterCard = {
    title: string;
    content: FooterLink[];
    color: string;
    icon: string;
    semantic: 'address' | 'nav' | 'div'; // HTML semantic element to use
  };
  



  const footerCards: FooterCard[] = [
    {
      title: "Call",
      content: [{ 
        text: "(813) 344-1121", 
         href: "tel:+18133441121",
        type: 'phone'
      }],
      color: "#C1EDA5",
      icon: "/assets/phone-icon.svg",
      semantic: 'div'
    },
    {
      title: "Mail",
      content: [{
        text: "marymacgregor@tampabayplaytherapy.com", 
        href: "mailto:marymacgregor@tampabayplaytherapy.com",
        type: 'email'
      }],
      color: "#FFF0B0",
      icon: "/assets/mail-icon.svg",
      semantic: 'div'
    },
    {
      title: "Address",
      content: [{
        text: "Coming soon!",
        href: "https://www.google.com/maps/place/...",
        type: 'map'
      }],
      color: "#FFBE81",
      icon: "/assets/address-pin-icon.svg",
      semantic: 'address'
    },
    {
      title: "Social",
      content: [
        { text: "Instagram", href: "https://www.instagram.com", type: 'social' },
        { text: "LinkedIn", href: "https://www.linkedin.com", type: 'social' },
        { text: "Facebook", href: "https://www.facebook.com", type: 'social' },
        { text: "X", href: "https://www.x.com", type: 'social' },
      ],
      color: "#FFD5E5",
      icon: "/assets/search-globe-icon.svg",
      semantic: 'nav'
    },
    {
      title: "Quick Links",
      content: [
        { text: "Home", href: "/", type: 'internal' },
        { text: "About Us", href: "/about", type: 'internal' },
        { text: "Our Expertise", href: "/expertise", type: 'internal' },
        { text: "Contact", href: "/contact", type: 'internal' },
      ],
      color: "#D9C2FF",
      icon: "/assets/quick-links-icon.svg",
      semantic: 'nav'
    }
  ];
  
  export default footerCards;
