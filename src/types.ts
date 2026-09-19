export interface Specialty {
  id: number;
  name: string;
  description: string;
  category: 'clinica' | 'cirurgica' | 'diagnostico' | 'especializada';
  icon: string;
}

export interface SpecializedConsultation {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SurgeryArea {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ClinicValue {
  id: number;
  title: string;
  icon: string;
}

export interface InfrastructureItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  badge: string;
  icon: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  specialty: string;
  preferredDate: string;
  preferredPeriod: 'manha' | 'tarde';
  serviceType: 'consulta' | 'exame' | 'laboratorio' | 'cirurgia';
  notes: string;
}
