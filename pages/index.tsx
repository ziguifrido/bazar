import Card from '../src/components/Card'
import db from '../db.json'
import { Container, Grid } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Container maxWidth="80%">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Card product={db.products[0]} />
          <Card product={db.products[0]} />
          <Card product={db.products[0]} />
        </Grid>
      </Container>
    </>
  )
}
