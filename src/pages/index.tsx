import React from 'react'
import ButtonLink from 'shared/components/ButtonLink'
import Link from 'next/link'
import { Box, Card, Heading, Text, ThemeUIStyleObject } from 'theme-ui'
import Logo from 'shared/components/Logo'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'

const BENEFITS = [
  'Suporte no e-mail e whatsapp para dúvidas',
  'Economize muito mais com o seu processamento de pedidos.',
  'Processamento automático no shopify c/ código de rastreio',
  'Pedidos ilimitados',
  'Integração com Shopify',
  'Pedidos de origem nacional e internacional',
]

const FIRST_PLAN = [
  'Aumente seu lucro em até 3x',
  'Processamento de pedidos ilimitados',
  'Criação de contas com apenas 1 clique',
  'Processamento automático no shopify c/ código de rastreio',
]

type ContainerProps = {
  sx?: ThemeUIStyleObject
  children: React.ReactNode
}

const Container = ({ children, sx }: ContainerProps) => {
  return (
    <Box sx={{ maxWidth: 1080, margin: '0 auto', padding: '40px', ...sx }}>
      {children}
    </Box>
  )
}

const FooterText = ({ text }: { text: string }) => {
  return <Text sx={{ fontSize: '13px', fontWeight: 300 }}>{text}</Text>
}

const WhatsLink = ({ sx }: { sx?: ThemeUIStyleObject }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
      <Link href="#">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FaWhatsapp
            style={{
              width: '40px',
              height: '40px',
              color: '#103ffa',
              marginRight: '10px',
            }}
          />
          <Text sx={{ color: '#103ffa' }}>Dúvidas? Fale conosco!</Text>
        </Box>
      </Link>
    </Box>
  )
}

type ListItemProps = {
  text: string
  iconSize?: number
  textStyle?: ThemeUIStyleObject
}

const ListItem = ({ text, textStyle, iconSize = 30 }: ListItemProps) => {
  return (
    <Box as="li" sx={{ display: 'flex', my: 2, alignItems: 'center' }}>
      <FaCheckCircle
        color="#5d92ff"
        style={{ display: 'block', width: iconSize, height: iconSize }}
      />

      <Text
        sx={{
          width: '85%',
          fontFamily: 'Open Sans',
          fontSize: '27px',
          fontWeight: 300,
          ml: 15,
          ...textStyle,
        }}
      >
        {text}
      </Text>
    </Box>
  )
}

const Home = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            minHeight: ['auto', '150vh'],
            backgroundImage:
              'url("https://images.assets-landingi.com/VTpcd3v6/bg_top.jpg")',
            backgroundOrigin: 'center',
            backgroundSize: ['contain', 'auto'],
            backgroundPosition: ['center top', 'top center'],
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Container sx={{ padding: ['40px 30px', '30px 60px'] }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                mt: ['-30px', 0],
                justifyContent: ['space-between', 'space-around'],
              }}
              as="header"
            >
              <WhatsLink sx={{ display: ['none', 'block'] }} />

              <Box sx={{ height: ['40px', 'auto'] }}>
                <Logo />
              </Box>

              <ButtonLink
                sx={{
                  width: '9rem',
                  backgroundImage: 'linear-gradient(180deg, #2cdd9c, #1dc8cc)',
                }}
                href={'#'}
              >
                Fazer Login
              </ButtonLink>
            </Box>

            <Box
              as="main"
              sx={{
                width: ['100%', '540px'],
                display: ['flex', 'block'],
                flexDirection: 'column',
                alignItems: 'center',
                mt: [200, 4],
              }}
            >
              <Heading
                sx={{
                  my: 4,
                  fontSize: ['28px', '44px'],
                  letterSpacing: 0,
                  textAlign: ['center', 'left'],
                  lineHeight: [1.2, '48px'],
                }}
              >
                Tenha até 3x mais lucro em sua operação de dropshipping.
                Processando pedidos fora do aliexpress.
              </Heading>

              <Heading
                as="h4"
                sx={{
                  mb: 3,
                  letterSpacing: 0,
                  lineHeight: 1.3,
                  fontFamily: 'Open Sans',
                  fontWeight: 300,
                  textAlign: ['center', 'left'],
                  fontSize: ['20px', '30px'],
                }}
              >
                Economize no pagamento dos seus produtos e potencialize seu
                lucro com a ferramenta mais poderosa de processamento de pedidos
                do mercado.
              </Heading>

              <ButtonLink
                variant="secondary"
                sx={{ width: '100%', padding: '12px 0px', borderRadius: 30 }}
                href={'#'}
              >
                Quero lucrar mais
              </ButtonLink>
              <WhatsLink sx={{ display: ['block', 'none'], mt: 3 }} />
            </Box>
          </Container>
        </Box>

        <Container>
          <Heading
            sx={{
              textAlign: 'center',
              fontSize: '48px',
              mb: '25px',
              fontFamily: 'Dosis',
              display: ['none', 'block'],
            }}
          >
            Assista o vídeo até o final e veja{' '}
            <span style={{ color: '#0d82ff' }}>Como Funciona</span>
          </Heading>

          <Box
            sx={{
              margin: '0 auto',
              width: ['100%', '95%'],
              height: [200, 420],
              my: 10,
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/wYc5h8gsg2k"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              width="100%"
              height="100%"
            />{' '}
          </Box>
        </Container>
      </Box>

      <Container
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage:
            'url("https://images.assets-landingi.com/izWejUj1n8R7yzKL/ing.jpg")',
          backgroundOrigin: 'center',
          backgroundSize: ['contain', 'auto'],
          backgroundPosition: ['center top', 'center center'],
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Heading as="h2" sx={{ fontSize: 48, fontWeight: 300, mb: 4 }}>
          Confira nosso{' '}
          <span style={{ color: '#0050c7', fontWeight: 700 }}>plano</span>
        </Heading>

        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            maxWidth: 320,
            padding: 10,
            boxSizing: 'border-box',
            borderRadius: 14,
            backgroundColor: '#fff',
            boxShadow: '0.0625rem 0.0625rem 0.1875rem rgb(0 0 0 / 50%)',
          }}
        >
          <Text>Obtenha acesso completo a todas as nossas funcionalidades</Text>

          <Heading
            as="h4"
            sx={{
              fontFamily: 'Dosis',
              fontWeight: 700,
              fontSize: 34,
              mt: 4,
              mb: 2,
            }}
          >
            14 dias de teste grátis.
          </Heading>

          <Text
            sx={{
              fontFamily: 'Dosis',
              fontWeight: 700,
              fontSize: 48,
              color: '#0050c7',
            }}
          >
            Após R$387/mês
          </Text>
          <Text sx={{ fontFamily: 'Dosis', fontWeight: 300, fontSize: 17 }}>
            + 3% pelo valor faturado <br /> *valor cobrado apenas por pedidos
            processados pela ferramenta.
          </Text>

          <Box sx={{ width: '100%' }}>
            {FIRST_PLAN.map((feature, index) => (
              <ListItem
                key={`${index}--${feature}`}
                text={feature}
                textStyle={{
                  fontFamily: 'Dosis',
                  fontWeight: 300,
                  fontSize: 22,
                  color: '#0050c7',
                }}
                iconSize={18}
              />
            ))}
          </Box>

          <Text
            sx={{ fontFamily: 'Dosis', fontWeight: 300, fontSize: 16, mt: 3 }}
          >
            *cupons de frete grátis não são aplicados em 100% dos pedidos
            processados
          </Text>
        </Card>

        <WhatsLink sx={{ display: 'block', mt: 3 }} />
        <ButtonLink
          variant="secondary"
          sx={{ width: 320, mt: 3, padding: '12px 0px', borderRadius: 30 }}
          href={'#'}
        >
          Quero lucrar mais
        </ButtonLink>
      </Container>

      <Box
        sx={{
          backgroundImage:
            "url('https://images.assets-landingi.com/z5os6vW6/bg_bottom.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: ['top', 'center'],
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            padding: ['20px', '40px'],
          }}
        >
          <Box
            as="ul"
            sx={{
              width: ['100%', '500px'],
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {BENEFITS.map((text, index) => (
              <ListItem key={`${index}--${text}`} text={text} />
            ))}

            <Text sx={{ fontWeight: 300, padding: 20 }}>
              Obs: Necessário possuir proxy e números de telefone para fazer a
              criação de contas para o processamento de pedidos. Ferramenta
              possui tutoriais de instalação e indicações de fornecedores de
              proxy, números e e-mails.
            </Text>

            <ButtonLink
              sx={{
                width: ['100%', '75%'],
                fontSize: '17px',
                fontWeitgh: 300,
                margin: '0 auto',
                padding: '12px 8px',
                borderRadius: 40,
              }}
              variant={'secondary'}
              href="#"
            >
              Quero Aumentar meu faturamento
            </ButtonLink>
          </Box>

          <Box
            as="footer"
            sx={{
              width: '100%',
              height: [120, 60],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              mt: [60, 20],
              flexDirection: ['column', 'row'],
            }}
          >
            <FooterText text={'Copyright © Droplinkfy 2022'} />
            <FooterText text={'E-mail: suporte@droplinkfy.com'} />
            <FooterText
              text={
                '*Não somos responsáveis pelos bloqueios de contas dos usuários'
              }
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Home
