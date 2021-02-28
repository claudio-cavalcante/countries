import React from 'react';
import styled from '@emotion/styled';
import { unit } from '../styles';
import SearchCountry from '../components/SearchCountry'

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid, showSearchBar }) => {  
  const placeholder = "Pesquise aqui pelo nome do país ou pelo nome da capital do país..."

  return (
    <>         
      { showSearchBar && <SearchCountry placeholder={placeholder}/> }
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
    </>
  );
};

export default Layout;

/** Layout styled components */
const PageContainer = styled.div((props) => ({
  display: 'flex',
  margin: '0 auto',
  justifyContent: props.grid ? 'center' : 'top',
  flexDirection: props.grid ? 'row' : 'column',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  width: '100%',
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));