import React, { useState } from 'react';
import { ModalBackdrop } from './Modal';
import { useTheme, Button, Menu, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { projectFirestore } from '../../firebase/config';
import { useRouter } from 'next/router';
import Link from 'next/link';
//styled
const StyledEditModal = styled.div`
  max-height: 20vh;
  max-width: 20vw;
  left: 40vw;
  top: 40vh;
  z-index: 3;
  position: absolute;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  word-wrap: normal;
  z-index: 999;
`;
//
const EditModal = ({ setEdit, deleteImage, id, image, updateImage }) => {
  //consts//
  const theme = useTheme();
  const router = useRouter();
  //states
  const [anchorEl, setAnchorEl] = useState(null);
  //
  //functions
  const openMenuHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const updateCategoryAndCloseMenu = (name) => {
    let imageRef = projectFirestore.collection('photoshop').doc(image.id);

    imageRef.update({ category: name });
    setAnchorEl(null);
    updateImage(id);
  };
  //
  return (
    <>
      <StyledEditModal theme={theme}>
        <Button
          style={{ width: '150px', height: '75px', margin: '10px' }}
          variant='contained'
          onClick={() => {
            deleteImage(id);
            setEdit(false);
          }}
        >
          Usuń
        </Button>
        <Button
          style={{ width: '150px', height: '75px', margin: '10px' }}
          variant='contained'
          onClick={(e) => openMenuHandler(e)}
        >
          Zmień Kategorie
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          onClose={() => closeMenuHandler()}
          anchorEl={anchorEl}
        >
          {['banery', 'before after', 'miniatury', 'tapety'].map(
            (name) =>
              name !== router.query.slug && (
                <Link href='/kategorie/[slug]' as={`/kategorie/${name}`}>
                  <MenuItem
                    key={name}
                    onClick={() => updateCategoryAndCloseMenu(name)}
                  >
                    {name}
                  </MenuItem>
                </Link>
              )
          )}
        </Menu>
      </StyledEditModal>
      <ModalBackdrop
        onClick={() => {
          setEdit(false);
          anchorEl && closeMenuHandler();
        }}
      ></ModalBackdrop>
    </>
  );
};

export default EditModal;
