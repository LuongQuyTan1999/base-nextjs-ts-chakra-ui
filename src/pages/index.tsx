import { ThemeToggleButton } from '@/components';
import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DemoComponents = () => {
  return (
    <>
      <Flex
        flexWrap="wrap"
        sx={{
          gap: '20px',
        }}
      >
        <Button>Primary button</Button>
        <Button variant="outline-primary">Outline primary button</Button>
        <Button variant="secondary">Secondary button</Button>
        <Button variant="outline-secondary">Outline secondary button</Button>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('blackAlpha.500', 'blueAlpha.50')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an indie app developer based in Japan!
        </Box>
        <ThemeToggleButton />
      </Flex>
    </>
  );
};

DemoComponents.getLayout = function getLayout(page: React.ReactElement) {
  return <div>{page}</div>;
};

export default DemoComponents;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string)),
      // Will be passed to the page component as props
    },
  };
};
