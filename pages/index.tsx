import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card"

import { AppBarSearchInput } from "../src/components/ui/AppBarSearchInput";

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>Topdeck Search</title>
        <meta name="description" content="Tool to search and sort card postings from topdeck" />
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Topdeck Search
          </Typography>
          <AppBarSearchInput placeholder='Search' />
        </Toolbar>
      </AppBar>
      <Container>
        <Box>
          <Typography component="h2" variant='h5'>Results</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
