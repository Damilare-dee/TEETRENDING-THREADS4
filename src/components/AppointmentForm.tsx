import React, { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ServiceType, OccasionType, Appointment, UploadedFile, ClientMeasurement } from '../types';
import { SERVICE_OPTIONS, OCCASION_OPTIONS, WHATSAPP_NUMBER, PHONE_DISPLAY, GOOGLE_FORM_URL, TIKTOK_URL, WHATSAPP_ORDER_URL } from '../data/fashionData';
import { Calendar, Clock, User, Phone, Mail, FileText, Upload, Image as ImageIcon, X, CheckCircle2, Sparkles, AlertCircle, Scissors, Loader2, MessageCircle, Video, FileEdit, ExternalLink } from 'lucide-react';

interface AppointmentFormProps {
  preselectedService?: ServiceType | string;
  clientMeasurements?: ClientMeasurement | null;
  onAppointmentBooked: (appointment: Appointment) => void;
  onOpenMeasurementGuide: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  preselectedService,
  clientMeasurements,
  onAppointmentBooked,
  onOpenMeasurementGuide
}) => {
  // Formspree Hook
  const [formspreeState, sendToFormspree] = useForm('xwvgzqvp');

  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState<ServiceType>(
    (preselectedService as ServiceType) || 'Consultation'
  );
  
  // Set default preferred date to tomorrow
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [preferredDate, setPreferredDate] = useState(tomorrowStr);
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [occasion, setOccasion] = useState<OccasionType>('Wedding');
  const [eventDate, setEventDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [inspirationImages, setInspirationImages] = useState<UploadedFile[]>([]);
  const [agreesToContact, setAgreesToContact] = useState(true);

  // UI state
  const [dragActive, setDragActive] = useState(false);
  const [formError, setFormError] = useState('');
  const [lastSubmittedRef, setLastSubmittedRef] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
  ];

  // Update service if prop changes
  React.useEffect(() => {
    if (preselectedService && SERVICE_OPTIONS.includes(preselectedService as any)) {
      setServiceRequired(preselectedService as ServiceType);
    }
  }, [preselectedService]);

  // Handle File Upload
  const handleFiles = (files: FileList) => {
    const validFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    
    if (validFiles.length === 0) {
      setFormError('Please upload valid image files (JPG, PNG, WEBP).');
      return;
    }

    validFiles.forEach(file => {
      if (file.size > 8 * 1024 * 1024) {
        setFormError('Image size should be less than 8MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        const newUpload: UploadedFile = {
          id: 'img-' + Math.random().toString(36).substring(2, 9),
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
          dataUrl
        };
        setInspirationImages(prev => [...prev, newUpload]);
        setFormError('');
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeImage = (id: string) => {
    setInspirationImages(prev => prev.filter(img => img.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (!phoneNumber.trim() || phoneNumber.length < 7) {
      setFormError('Please enter a valid contact phone number.');
      return;
    }

    if (!preferredDate) {
      setFormError('Please select a preferred appointment date.');
      return;
    }

    if (!agreesToContact) {
      setFormError('Please agree to be contacted regarding your appointment.');
      return;
    }

    // Generate unique appointment reference code (e.g. TTT-2026-8492)
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `TTT-2026-${randomCode}`;

    const newAppointment: Appointment = {
      id: 'apt-' + Date.now(),
      referenceCode,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim() || undefined,
      serviceRequired,
      preferredDate,
      preferredTime,
      occasion,
      eventDate: eventDate || undefined,
      additionalInfo: additionalInfo.trim() || undefined,
      inspirationImages,
      agreesToContact,
      status: 'Pending Review',
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      measurements: clientMeasurements || undefined
    };

    // Send form data to Formspree
    await sendToFormspree(e);

    onAppointmentBooked(newAppointment);
    setLastSubmittedRef(referenceCode);

    // Reset Form fields
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setAdditionalInfo('');
    setInspirationImages([]);
  };

  const formattedMeasurements = clientMeasurements
    ? `Bust: ${clientMeasurements.bust || '-'}, Waist: ${clientMeasurements.waist || '-'}, Hips: ${clientMeasurements.hips || '-'}, Shoulder: ${clientMeasurements.shoulderWidth || '-'}, Length: ${clientMeasurements.fullLength || '-'}`
    : 'None';

  return (
    <section id="booking" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Card Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
          
          {/* Card Header Banner */}
          <div className="bg-white text-blue-950 border-b border-blue-100 p-8 sm:p-10 relative overflow-hidden text-center space-y-4">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest shadow-sm">
              <span>Contact Us & Bespoke Booking</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-blue-950">
              Get In Touch & Book Consultation
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
              Schedule your appointment, chat directly on WhatsApp, watch our TikTok, or submit our official Google Order Form.
            </p>

            {/* Active Contact Links Banner */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span>Call Us: {PHONE_DISPLAY}</span>
              </a>

              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Chat with Us on WhatsApp</span>
              </a>

              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-sm"
              >
                <Video className="w-4 h-4 text-pink-400" />
                <span>Watch TEETHREADS on TikTok</span>
              </a>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-sm"
              >
                <FileEdit className="w-4 h-4 text-slate-950" />
                <span>Complete Google Order Form</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
              </a>
            </div>
          </div>

          {/* Formspree Success State */}
          {formspreeState.succeeded && (
            <div className="p-8 sm:p-10 text-center space-y-4 bg-emerald-50/50 border-b border-emerald-100 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-emerald-950">
                Booking Request Sent via Formspree!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you! Your appointment request has been submitted successfully to our design team.
                {lastSubmittedRef && (
                  <span className="block mt-2 font-mono font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded inline-block">
                    Reference: {lastSubmittedRef}
                  </span>
                )}
              </p>
            </div>
          )}

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
            
            {/* Hidden Formspree Metadata */}
            <input type="hidden" name="preferredTime" value={preferredTime} />
            <input type="hidden" name="clientMeasurements" value={formattedMeasurements} />
            <input type="hidden" name="inspirationImagesCount" value={inspirationImages.length} />

            {formError && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm rounded-xl flex items-center gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* 1. PERSONAL INFORMATION */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <User className="w-5 h-5 text-blue-600" />
                <h3 className="font-serif text-xl font-bold text-blue-950">
                  Personal Information
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Tara Johnson"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                  <ValidationError prefix="Full Name" field="fullName" errors={formspreeState.errors} className="text-xs text-rose-600 mt-1" />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone Number / WhatsApp <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="e.g. +234 813 977 9290"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                  <ValidationError prefix="Phone Number" field="phoneNumber" errors={formspreeState.errors} className="text-xs text-rose-600 mt-1" />
                </div>

                {/* Email Address */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. client@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-xs text-rose-600 mt-1" />
                </div>

              </div>
            </div>

            {/* 2. APPOINTMENT DETAILS */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="font-serif text-xl font-bold text-blue-950">
                  Appointment Details
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Service Required */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Service Required <span className="text-blue-600">*</span>
                  </label>
                  <select
                    name="serviceRequired"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value as ServiceType)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Occasion */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Occasion <span className="text-blue-600">*</span>
                  </label>
                  <select
                    name="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value as OccasionType)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                  >
                    {OCCASION_OPTIONS.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Preferred Date <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    min={tomorrowStr}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                  />
                </div>

                {/* Preferred Time Slots */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Preferred Time Slot <span className="text-blue-600">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setPreferredTime(slot)}
                        className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                          preferredTime === slot
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-blue-50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Event Date (Optional) */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Event Date <span className="text-slate-400 text-[10px] font-normal">(Optional - Date of wedding, party, ceremony)</span>
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                  />
                </div>

              </div>
            </div>

            {/* 3. MEASUREMENT ATTACHMENT STATUS */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Scissors className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-blue-950">
                    Client Measurement Record
                  </h4>
                  <p className="text-xs text-slate-600">
                    {clientMeasurements
                      ? `Attached: Bust ${clientMeasurements.bust || '-'}, Waist ${clientMeasurements.waist || '-'}, Hips ${clientMeasurements.hips || '-'}`
                      : 'You can optionally log your measurements now to attach them to this booking.'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenMeasurementGuide}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0"
              >
                {clientMeasurements ? 'Edit Measurements' : 'Add Measurements'}
              </button>
            </div>

            {/* 4. ADDITIONAL INFORMATION */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-serif text-xl font-bold text-blue-950">
                  Additional Information
                </h3>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Tell Us About Your Preferred Style & Details
                </label>
                <textarea
                  name="additionalInfo"
                  rows={4}
                  placeholder="Share details about your preferred fabric type, color palette, outfit size, inspiration preferences, or special requests..."
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                ></textarea>
                <ValidationError prefix="Message" field="additionalInfo" errors={formspreeState.errors} className="text-xs text-rose-600 mt-1" />
              </div>
            </div>

            {/* 5. UPLOAD INSPIRATION */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-blue-600" />
                  <h3 className="font-serif text-xl font-bold text-blue-950">
                    Upload Inspiration <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-light">
                Upload photos or design references you'd like us to recreate, customize, or draw inspiration from.
              </p>

              {/* Drag and Drop Zone */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                  dragActive
                    ? 'border-blue-600 bg-blue-50/60'
                    : 'border-slate-300 hover:border-blue-400 bg-slate-50/50 hover:bg-slate-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => e.target.files && handleFiles(e.target.files)}
                  className="hidden"
                />

                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-white rounded-full border border-slate-200 shadow-sm text-blue-600">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-950">
                      Click to upload
                    </span>{' '}
                    <span className="text-xs text-slate-500">or drag and drop photos</span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    PNG, JPG, WEBP or GIF up to 8MB
                  </span>
                </div>
              </div>

              {/* Image Uploaded Thumbnails Preview */}
              {inspirationImages.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {inspirationImages.map((img) => (
                    <div
                      key={img.id}
                      className="relative group aspect-square rounded-xl overflow-hidden border border-slate-300 bg-slate-900 shadow-sm"
                    >
                      <img
                        src={img.dataUrl}
                        alt={img.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeImage(img.id);
                          }}
                          className="p-1.5 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors"
                          title="Remove image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="absolute bottom-1 left-1 right-1 bg-slate-950/80 text-white text-[10px] px-1.5 py-0.5 rounded truncate">
                        {img.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* 6. TERMS AGREEMENT CHECKBOX */}
            <div className="pt-2 border-t border-slate-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreesToContact"
                  checked={agreesToContact}
                  onChange={(e) => setAgreesToContact(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-600 cursor-pointer"
                />
                <span className="text-xs text-slate-700 leading-relaxed font-medium">
                  ☑️ I agree to be contacted regarding my appointment via Phone, WhatsApp, or Email.
                </span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={formspreeState.submitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base uppercase tracking-widest rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formspreeState.submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 text-white" />
                    <span>Book Appointment</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

