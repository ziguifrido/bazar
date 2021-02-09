import { Box, Image, Badge } from '@chakra-ui/react'

type CardProps = {
  product: {
    id: string,
    name: string,
    description: string,
    price: string,
    image: string,
    categories: string[]
  }
}

const Card = ({ product } : CardProps) => {
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" shadow="xl" className="card">
      <Image rounded="none" src={product.image} alt="Produto" maxW="sm" paddingBottom="2"/>
      <Box textAlign="center">
        <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              &bull;&nbsp;
              {product.categories.map((c, index) => {
                return <span key={index}>{c} &bull;&nbsp;</span>
              })}
            </Box>
        <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </Box>
      </Box>
      <Box textAlign="right">
        <Badge borderRadius="sm" px="2" colorScheme="green" textAlign="right">
          <h3>{product.price}</h3>
        </Badge>
      </Box>
    </Box>
  )
}

export default Card
