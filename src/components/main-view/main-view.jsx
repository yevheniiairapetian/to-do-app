import { ToDoView } from "../to-do-view/to-do-view";
import { Navigation } from "../navigation/navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Footer } from "../footer/footer";

export const MainView = () => {


  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1600);
  // }, []);

  // useEffect(() => {
  //   // 👇️ Scroll to top on page load
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);


  return (
    <>
       
        
        {/* <Navigation */}


        {/* /> */}
       
          <Routes>




            <Route
              path="/"
              element={
                <>

                  <Col>
                    <ToDoView className=""

                    />
                    
                    
           
                  </Col>
                  <Footer/>

                </>
              }

            />


            <Route
        
              path="/*"
              
              element={
              <>
              {/* <PageNotFoundView /> */}
              
          
              
            
              </>
            }
            
            />
            
            
          </Routes>
         
        
          
          </>
      
    
  );
};



