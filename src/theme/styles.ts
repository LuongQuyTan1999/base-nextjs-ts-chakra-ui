import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

// const styles = {
//   global: {
//     'html, body': {},

//     '&::-webkit-scrollbar': {
//       width: '6px',
//       height: '6px',
//     },

//     '&::-webkit-scrollbar-thumb': {
//       borderRadius: '4px',
//     },

//     '.scroll': {
//       '&::-webkit-scrollbar-thumb': {
//         backgroundColor: 'nickel',
//       },
//     },
//   },
//   colors: {
//     gray: {
//       700: '#1f2733',
//     },
//   },

//   styles: {
//     global: (props: GlobalStyleProps) => ({
//       body: {
//         color: mode('gray.800', 'whiteAlpha.900')(props),
//         bg: mode('#f0e7db', '#202023')(props),
//         fontFamily: 'Helvetica, sans-serif',
//         transitionProperty: 'background-color',
//         transitionDuration: 'normal',
//         lineHeight: 'base',
//       },
//       html: {
//         fontFamily: 'Helvetica, sans-serif',
//       },
//       '*::placeholder': {
//         color: mode('gray.400', 'whiteAlpha.400')(props),
//       },
//       '*, *::before, &::after': {
//         borderColor: mode('gray.200', 'whiteAlpha.300')(props),
//         wordWrap: 'break-word',
//       },
//     }),
//   },
// };

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#f0e7db', '#202023')(props),
      fontFamily: 'Helvetica, sans-serif',
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
    },
    html: {
      fontFamily: 'Helvetica, sans-serif',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
};

export default styles;
