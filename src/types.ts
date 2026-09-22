export type ServiceType =
  | 'Consultation'
  | 'Measurement'
  | 'Fitting'
  | 'Pickup'
  | 'Alteration'
  | 'Bridal Consultation';

export type OccasionType =
  | 'Wedding'
  | 'Birthday'
  | 'Naming Ceremony'
  | 'Photoshoot'
  | 'Church'
  | 'Traditional Event'
  | 'Other';

export type CategoryFilter =
  | 'All'
  | 'Bespoke Native'
  | "Children's Wear"
  | 'Bridal Couture'
  | 'Reception & Party'
  | 'Robes & Accessories';

export interface BestSellerItem {
  id: string;
  title: string;
  description: string;
  category: CategoryFilter;
  tag: string;
  image: string;
  details: string[];
  startingPrice?: string;
  leadTime?: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  details: string;
  estimatedDuration: string;
}

export interface UploadedFile {
  id: string;
  name: string;
  size: string;
  dataUrl: string;
}

export interface ClientMeasurement {
  bust: string;
  waist: string;
  hips: string;
  fullLength: string;
  shoulderWidth: string;
  sleeveLength: string;
  additionalNotes?: string;
}

export interface Appointment {
  id: string;
  referenceCode: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  serviceRequired: ServiceType;
  preferredDate: string;
  preferredTime: string;
  occasion: OccasionType;
  eventDate?: string;
  additionalInfo?: string;
  inspirationImages: UploadedFile[];
  agreesToContact: boolean;
  status: 'Confirmed' | 'Pending Review' | 'Completed' | 'Rescheduled';
  createdAt: string;
  measurements?: ClientMeasurement;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
