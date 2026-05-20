import type { Field } from 'payload'

export const titleMaxWidth: Field = {
  name: 'titleMaxWidth',
  label: 'Largura máxima do título (desktop)',
  type: 'select',
  required: true,
  defaultValue: 'none',
  admin: {
    description: 'Limita a largura do título apenas em telas ≥ 1024px (desktop).',
  },
  options: [
    { label: 'Padrão (sem limite)', value: 'none' },
    { label: 'Pequeno (~480px)', value: 'sm' },
    { label: 'Médio (~640px)', value: 'md' },
    { label: 'Grande (~800px)', value: 'lg' },
    { label: 'Extra (~960px)', value: 'xl' },
  ],
}
