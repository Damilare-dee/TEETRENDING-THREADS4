import { BestSellerItem, ServiceItem, WhyChooseUsItem } from '../types';

import HERO_IMAGE from '../assets/images/hero_designer_bg_1785585087889.jpg';
import BRIDAL_IMAGE from '../assets/images/zeenia_bridal_1785337893584.jpg';
import CHILDREN_IMAGE from '../assets/images/zeenia_children_1785337907409.jpg';
import RECEPTION_IMAGE from '../assets/images/zeenia_reception_1785337921484.jpg';
import BRAND_LOGO_URL from '../assets/images/teethreads_logo_1785507208228.jpg';
import ANKARA_BUBU_IMAGE from '../assets/images/ankara_bubu_dress_1785585946362.jpg';
import LIGHT_BLUE_LACE_IMAGE from '../assets/images/light_blue_lace_dress_1785586195747.jpg';
import GREEN_YELLOW_ANKARA_IMAGE from '../assets/images/green_yellow_ankara_bubu_1785586456831.jpg';

export { HERO_IMAGE, BRIDAL_IMAGE, CHILDREN_IMAGE, RECEPTION_IMAGE, BRAND_LOGO_URL, ANKARA_BUBU_IMAGE, LIGHT_BLUE_LACE_IMAGE, GREEN_YELLOW_ANKARA_IMAGE };

export const BEST_SELLERS: BestSellerItem[] = [
  {
    id: 'ankara-bubu-gown',
    title: "Bespoke Ankara Bubu Gown",
    description: "Vibrant split-color Ankara Kaftan with intricate geometric prints and elegant neck tassel detailing.",
    category: "Bespoke Native",
    tag: "Signature Bubu",
    badge: "Most Popular",
    image: ANKARA_BUBU_IMAGE,
    details: [
      "Custom tailored silhouette suited for effortless elegance & comfort",
      "Premium authentic Ankara wax print fabric with rich vibrant dye",
      "Handcrafted neckline finish with decorative green tassel feature",
      "Available in customized length, sleeve styles, and pattern mixes"
    ],
    startingPrice: "Custom Quote",
    leadTime: "3 - 5 Business Days"
  },
  {
    id: 'bridal-gowns',
    title: "Bridal Gowns",
    description: "Custom-designed wedding gowns tailored to your vision, style, and perfect fit.",
    category: "Bridal Couture",
    tag: "Bespoke Couture",
    badge: "Masterpiece",
    image: BRIDAL_IMAGE,
    details: [
      "Full private bridal consultation & moodboard styling",
      "Premium French lace, silk Mikado & satin fabrics",
      "Internal corsetry & structured waist sculpting",
      "Multiple fitting sessions for precise silhouette accuracy"
    ],
    startingPrice: "Bespoke Consultation",
    leadTime: "3 - 6 Weeks"
  },
  {
    id: 'reception-dresses',
    title: "Sky Blue Puff-Sleeve Lace Dress",
    description: "Chic off-shoulder lace dress featuring statement voluminous puff sleeves and waist cutout accents.",
    category: "Reception & Party",
    tag: "Glamour Look",
    badge: "Showstopper",
    image: LIGHT_BLUE_LACE_IMAGE,
    details: [
      "Tailored off-shoulder silhouette with structured waist sculpting",
      "Vibrant sky-blue textured eyelet lace fabric",
      "Statement exaggerated puff sleeves with elasticated cuffs",
      "Modern side waist cutout for a contemporary high-fashion finish"
    ],
    startingPrice: "Bespoke Consultation",
    leadTime: "2 - 4 Weeks"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'serv-children',
    name: "Children's Wear",
    description: "Tailored native outfits, party dresses, and festive attire crafted with precision for toddlers to teens.",
    iconName: "Sparkles",
    details: "Focusing on child comfort, durable stitching, and breathtaking festive charm.",
    estimatedDuration: "30 Mins Consultation"
  },
  {
    id: 'serv-bridal',
    name: "Bridal Gowns",
    description: "Full bespoke bridal couture designed from sketch to final stitch to match your dream wedding aesthetic.",
    iconName: "Crown",
    details: "Includes fabric swatches, sketch reviews, and multi-stage fitting sessions.",
    estimatedDuration: "60 Mins Private Session"
  },
  {
    id: 'serv-flowergirl',
    name: "Flower Girl Dresses",
    description: "Handcrafted miniature gowns styled seamlessly with your bridal theme and color story.",
    iconName: "Heart",
    details: "Designed with flexible growth seams and non-scratch luxury linings.",
    estimatedDuration: "30 Mins Consultation"
  },
  {
    id: 'serv-reception',
    name: "Reception Dresses",
    description: "High-impact second-look gowns engineered for effortless elegance and night-long celebration.",
    iconName: "Flame",
    details: "Lightweight luxury fabrics, corset support, and stunning entrance details.",
    estimatedDuration: "45 Mins Consultation"
  },
  {
    id: 'serv-traditional',
    name: "Traditional & Native Outfits",
    description: "Authentic, tailored traditional wear for weddings, naming ceremonies, church, and cultural celebrations.",
    iconName: "Scissors",
    details: "Precision cutting for lace, Aso-Oke, Brocade, Ankara, and senator cut ensembles.",
    estimatedDuration: "30 Mins Consultation"
  },
  {
    id: 'serv-robes',
    name: "Bridal Robes & Accessories",
    description: "Silk robes, customized monograms, and handcrafted accessories for your wedding prep shoot.",
    iconName: "Shirt",
    details: "Monogramming, feather accents, and matching bridesmaid sets.",
    estimatedDuration: "20 Mins Selection"
  },
  {
    id: 'serv-alterations',
    name: "Custom Fittings & Alterations",
    description: "In-studio measurement sessions, posture adjustments, and restructuring for a glove-like fit.",
    iconName: "Ruler",
    details: "Bring existing outfits or garments for re-tailoring and silhouette refining.",
    estimatedDuration: "30 Mins Fitting"
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'craftsmanship',
    title: "Expert Craftsmanship",
    description: "Every seam, hem, and embellishment is executed with exceptional attention to detail.",
    iconName: "Award"
  },
  {
    id: 'custom-fit',
    title: "Exact Measurements",
    description: "Custom-made outfits tailored strictly to your individual body contours and posture.",
    iconName: "Ruler"
  },
  {
    id: 'premium-fabrics',
    title: "Premium Fabrics & Finishing",
    description: "Sourced luxury textiles, soft comfortable linings, and flawless interior finishing.",
    iconName: "Gem"
  },
  {
    id: 'unique-designs',
    title: "Unique Bespoke Designs",
    description: "Original concepts designed to ensure you stand out at every special occasion.",
    iconName: "Crown"
  },
  {
    id: 'personalized-experience',
    title: "Personalized Styling",
    description: "Dedicated one-on-one consultation and guidance throughout your design journey.",
    iconName: "UserCheck"
  }
];

export const SERVICE_OPTIONS = [
  'Consultation',
  'Measurement',
  'Fitting',
  'Pickup',
  'Alteration',
  'Bridal Consultation'
] as const;

export const OCCASION_OPTIONS = [
  'Wedding',
  'Birthday',
  'Naming Ceremony',
  'Photoshoot',
  'Church',
  'Traditional Event',
  'Other'
] as const;

export const WHATSAPP_NUMBER = "+2348053403547";
export const PHONE_DISPLAY = "+234 8053403547";
export const TIKTOK_URL = "https://www.tiktok.com/@christytosyn_n?_r=1&_d=em0e82946j5m5c&sec_uid=MS4wLjABAAAAHr9BHE4WJc9tJrjPZ1BEXU5WQrJrF6cDd4MWsDZAaXYbjjxTQgA27X5U5B-KVe5p&share_author_id=7115034028231967750&sharer_language=en&source=h5_m&u_code=e2f9h18ealea4f&item_author_type=1&utm_source=whatsapp&share_enter_from=&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=9DBB97CC-E10F-4616-9E97-62474B0815E0&user_id=7115034028231967750&sec_user_id=MS4wLjABAAAAHr9BHE4WJc9tJrjPZ1BEXU5WQrJrF6cDd4MWsDZAaXYbjjxTQgA27X5U5B-KVe5p&utm_campaign=client_share&panel_source_v2=qrcode_panel&ug_btm=b0,b0&social_share_type=5&share_app_id=1233";
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScKx3E2rtjYWQWL485qpZ3P9UqSk_OmmwLop6EYn3ytgg_szw/viewform?usp=publish-editor";
export const WHATSAPP_ORDER_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent("Hello TEE TRENDING THREADS! I would like to order/chat on WhatsApp.")}`;
