export const inputStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': { color: 'var(--text)' },
  '& .MuiInputLabel-root': { color: 'var(--sec2)' },

  color: 'white',
  borderRadius: '0.5em',
  resize: 'none',
  transition: 'filter 300ms ease-in-out',
  filter: 'drop-shadow(0 0 0.2vw rgba(133, 163, 171, 0.2))',
  background: 'rgba(22, 34, 55, 1)',
  '&:focus': {
    outline: 'none',
    filter: 'drop-shadow(0 0 0.3vw rgba(133, 163, 171, 0.4))',
  },
};
