/**
 * seo.ts — JSON-LD structured data helpers for search engine visibility.
 *
 * Generates MedicalClinic and Physician schema objects.
 * Inject into <head> via App.tsx useEffect.
 */

import { clinic, doctors } from '@/data/clinic';
import type { Doctor } from '@/data/clinic';

/**
 * Returns a JSON-LD object for the MedicalClinic schema type.
 * @see https://schema.org/MedicalClinic
 */
export function getMedicalClinicSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type':    'MedicalClinic',
    name:        clinic.name,
    description: clinic.description,
    url:         '[YOUR-WEBSITE-URL]',
    telephone:   clinic.phone,
    email:       clinic.email,
    address: {
      '@type':          'PostalAddress',
      streetAddress:    clinic.address,
      addressCountry:   'IN',
    },
    openingHoursSpecification: [
      // Mon–Sat morning
      {
        '@type':       'OpeningHoursSpecification',
        dayOfWeek:     ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens:         '10:00',
        closes:        '14:00',
      },
      // Mon–Sat evening
      {
        '@type':       'OpeningHoursSpecification',
        dayOfWeek:     ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens:         '17:00',
        closes:        '20:00',
      },
    ],
    hasMap:       clinic.mapsLink,
    medicalSpecialty: ['GeneralPractice', 'Pediatrics'],
  };
}

/**
 * Returns a JSON-LD object for a Physician schema type.
 * @see https://schema.org/Physician
 */
export function getPhysicianSchema(doctor: Doctor): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type':    'Physician',
    name:        doctor.name,
    description: `${doctor.specialty} with ${doctor.experience} of experience.`,
    medicalSpecialty: doctor.specialty === 'General Physician'
      ? 'GeneralPractice'
      : 'Pediatrics',
    worksFor: {
      '@type': 'MedicalClinic',
      name:     clinic.name,
    },
    address: {
      '@type':       'PostalAddress',
      streetAddress: clinic.address,
    },
    telephone: clinic.phone,
  };
}

/**
 * Serialises all schema objects to a JSON string for injection into a
 * <script type="application/ld+json"> tag.
 */
export function buildJsonLd(): string {
  const schemas = [
    getMedicalClinicSchema(),
    ...doctors.map(getPhysicianSchema),
  ];
  return JSON.stringify(schemas);
}
