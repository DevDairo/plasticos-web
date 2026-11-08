// Identity and address were supplied by the client. Administration is the
// functional contact area in the policy; its staffing must be ensured by the business.
// ContactFormPreview remains disabled independently of this editorial status.
export const legal = {
  version: '2026-11-08.1',
  updatedDisplay: '8 de noviembre de 2026',
  responsibleName: 'PLASTICOS SANTUARIO CAUCASIA S.A.S.',
  taxId: '901725680-9',
  confirmedAddress: 'Carrera 20 # 28-00, Caucasia, Antioquia, Colombia',
  privacyContactArea: 'Administración de PLASTICOS SANTUARIO CAUCASIA S.A.S.',
  effectiveDate: '8 de noviembre de 2026',
  emailIsReference: true,
} as const;

export const legalIdentityComplete = Boolean(
  legal.responsibleName && legal.taxId && legal.confirmedAddress &&
  legal.privacyContactArea && legal.effectiveDate,
);

export const legalLinks = {
  terms: '/informacion-legal/',
  privacy: '/politica-tratamiento-datos/',
} as const;
