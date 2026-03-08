export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export const SERVICES: Service[] = [
  {
    id: 'hand-therapy',
    title: 'Hand Therapy',
    description: 'Specialized rehabilitation for hand and upper limb injuries, post-surgical recovery, and functional limitations.',
    icon: 'Hand',
    path: '/services/hand-therapy'
  },
  {
    id: 'paediatric-therapy',
    title: 'Paediatric Therapy',
    description: 'Supporting children in developing essential skills for learning, play, and daily independence.',
    icon: 'Baby',
    path: '/services/paediatric-therapy'
  },
  {
    id: 'neuro-rehab',
    title: 'Neuro-rehabilitation',
    description: 'Rehabilitation for neurological conditions to improve functional independence and quality of life.',
    icon: 'Brain',
    path: '/services/neuro-rehabilitation'
  },
  {
    id: 'medico-legal',
    title: 'Medico-legal Services',
    description: 'Professional assessments and reports for RAF, medical negligence, and legal proceedings.',
    icon: 'FileText',
    path: '/services/medico-legal'
  },
  {
    id: 'fce',
    title: 'Functional Capacity Evaluations',
    description: 'Objective assessments of an individual\'s ability to perform work-related tasks.',
    icon: 'Activity',
    path: '/services/medico-legal'
  },
  {
    id: 'vocational-rehab',
    title: 'Vocational Rehabilitation',
    description: 'Supporting patients in returning to work or finding suitable employment after injury or illness.',
    icon: 'Briefcase',
    path: '/services/medico-legal'
  }
];

export const BUSINESS_INFO = {
  name: 'TNM Occupational Therapy',
  owner: 'Tirelo N. Magane',
  title: 'Occupational Therapist',
  qualifications: 'BSc Occupational Therapy (University of the Witwatersrand)',
  certifications: [
    'ErgoScience Certified OT',
    'ErgoScience Physical Work Performance Evaluation certification'
  ],
  address: '49 Livingstone Blvd, Vanderbijlpark C. E. 1, Vanderbijlpark, 1900',
  phone: '064 679 8934',
  email: 'tnm.occupationaltherapy@gmail.com',
  hours: 'Mon - Fri: 09:00 - 17:00',
  area: 'Vanderbijlpark, Vaal, Gauteng'
};
