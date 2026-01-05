import next from 'eslint-config-next';

const config = [
  ...next,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'Terminal-portofolio2/**'],
  },
];

export default config;
