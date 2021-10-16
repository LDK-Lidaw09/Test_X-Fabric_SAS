import Particles from "react-particles-js";
import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";

const Profil = () => {
  const history = useHistory()
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.sas);
    history.push({
      pathname:'/recap',
      state: {data : data.sas}
    })
  } 
  
  return (
    <Container className="profil" style ={{backgroundImage: `linear-gradient(to top right, #000008, #0008),url(/images/wave.png)`}}>
      <Form onSubmit={handleSubmit(onSubmit)} style ={{backgroundImage: `linear-gradient(to top right, #000008, #0008),url(/images/wave.png)`}}>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
        <div  >
        <img src="/images/avatar.svg" alt="" /> <br/>
          <label>Nom</label>
          <input
            type="text"
            name=""
            required
            placeholder="nom"
            {...register('sas.name')}
            
          />
          <label>Prenoms</label>
          <input
            type="text"
            name=""
            required
            placeholder="prenoms"
            {...register('sas.firstname')}

            
          />
          <label>Telephone</label>
          <input
            type="text"
            name=""
       
            placeholder="Téléphone"
            {...register('sas.telephone')}

            
          />
          <label>Email</label>
          <input
            type="text"
            name=""
            required
            placeholder="Adresse Email"
            {...register('sas.email')}

          />
          
          <input type="submit"  style={{background: "#4caf50"}}  value="Valider" />
        </div>
        
      </Form>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin: auto;
  animation: fadeIn 1s;
  
`;
const Form = styled.form`
  text-align: center;
  margin: 3rem auto 0;
  max-width: 50%;
  max-width: 500px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  
  label{
      color:white;
  }
  img {
    width: 100px;
    height: 100px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    text-align:center;
    align-items: auto;
    margin-left: 0%;
  }
  input,
  textarea,select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
button{
  width: 80%;
  background-color: #4caf50;
  color: green;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }}
`;

export default Profil;
