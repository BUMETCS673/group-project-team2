import React, { Fragment } from 'react'
import { AboutPageContent } from '../styles/styles'
import { ImageBox } from '../styles/styles'
import { LandingPageSubContentLeft } from '../styles/styles'
import Ruiqi_Chang from '../assets/images/memberProfile/Ruiqi_Chang.jpg'
import Chinmay from '../assets/images/memberProfile//Chinmay_pic.jpg'
import Taina from '../assets/images/memberProfile/Taina.jpg'
import Ben from '../assets/images/memberProfile/Ben.jpg'

export const About: React.FC = () => {
  return (
    <Fragment>
      <AboutPageContent>
        <h1>Meet Our Team</h1>
          <LandingPageSubContentLeft>
            <div style={{ padding: '40px' }} >
              <ImageBox>
                {<img  style={{ width: 'auto', height: '200px' }} alt={'Bharat image'} />}
              </ImageBox>
              <h5>Bharat Gogineni  </h5>
              <h6>Team Leader</h6>
              <p style={{ whiteSpace: 'break-spaces' }}>
              Hello everyone! My name is Bharat Gogineni {'\n'}
              and I'm enrolled on the MS CIS Program with{'\n'}
              the Web Application Development concentration.{'\n'}
              I completed my computer science engineering {'\n'}
              in 2014 and worked for the past 7 years as {'\n'}
              a Software Architect at Vantage Agora Inc.{'\n'}
              I've been working mainly in a Product's {'\n'}
              division ,Building Web applications for the {'\n'}
              insurance industry. Apart from development{'\n'}
              I enjoy travelling and photography{'\n'}
              </p>
            </div>
            <div style={{ padding: '40px' }} >
              <ImageBox>
                {<img src={Chinmay} style={{ width: '200x', height: '200px' }} alt={'Chinmay image'} />}
              </ImageBox>
              <h5>Chinmay Bhelke</h5>
              <h6>Design and Implementation Leader/ Security Leader</h6>
              <p style={{ whiteSpace: 'break-spaces' }}>
                Hey all! I am Chinmay and I am completing{'\n'}
                the Masters in Computer Information Systems{'\n'}
                with a Minor in Web App Development :) {'\n'}
                I am passionate about development and {'\n'}
                distributed systems and I am very excited {'\n'}
                to take this class and create an awesome {'\n'}
                project.
                {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
              </p>
            </div>
          </LandingPageSubContentLeft>



          <LandingPageSubContentLeft>
          <div style={{ padding: '40px' }} >
              <ImageBox>
                {<img src={Taina} style={{ width: 'auto', height: '200px' }} alt={'Taina image'} />}
              </ImageBox>
              <h5>Taina Conde </h5>
              <h6>Configuration Leader</h6>
              <p style={{ whiteSpace: 'break-spaces' }}>
                Hi everyone! My name is Taina {'\n'}
                I'm currently enrolled on the MSSD program.{'\n'}
                I graduated in Economics and Law in Brazil, {'\n'}
                but I wasn't passionate about any of them.{'\n'}
                I decided to give Programming a try and {'\n'}
                I ended up enjoying it more than I expected.{'\n'}
                I've been coding individually on my own {'\n'}
                projects for the past two years. I'm {'\n'}
                excited to work as a team in our project {'\n'}
                this semester. In my free time, my husband {'\n'}
                and I love to explore NYC and travel.{'\n'}
                {'\n'}
              </p>
            </div>
            <div style={{ padding: '40px' }} >
              <ImageBox>
                {<img src={Ben} style={{ width: '200x', height: '200px' }} alt={'Ben image'} />}
              </ImageBox>
              <h5> Benoît Clemenceau </h5>
              <h6>Requirement Leader</h6>
              <p style={{ whiteSpace: 'break-spaces' }}>
                
                Hello everyone! My name is Benoît Clemenceau,{'\n'}
                I come from Paris, France, and I have been {'\n'}
                in Boston since January. I am doing the MS {'\n'}
                in Computer Information Systems and not {'\n'}
                following any specific concentration. {'\n'}
                The technology I am most comfortable with is {'\n'}
                JavaScript, especially with React. I have {'\n'}
                done a couple of internships and freelancing {'\n'}
                in Java, JavaScript, React, React Native, {'\n'}
                and Kotlin. My last side-project was building {'\n'}
                a web portfolio/blog in React with Next.js, {'\n'}
                you can check it out live here: benclem.dev{'\n'}
              </p>
            </div>
          </LandingPageSubContentLeft>
          <LandingPageSubContentLeft>
            <div style={{ padding: '40px' }} >
              <ImageBox>
                {<img src={Ruiqi_Chang} style={{ width: '200x', height: '200px' }} alt={'Ruiqi image'} />}
              </ImageBox>
              <h5> Ruiqi Chang </h5>
                <h6>Requirement Leader</h6>
              <p style={{ whiteSpace: 'break-spaces' }}>
                Hello everyone! My name is Ruiqi Chang.{'\n'}
                I am in MSCS program. I graduated in {'\n'}
                Management Information System major at{'\n'}
                Temple University in Phily. I am comfortable {'\n'}
                withJavaScript, Node.js, Java and mySql. I am {'\n'}
                with exciting to create a amazing project for {'\n'}
                my first online class with yours.
                {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
              </p>

            </div>
            </LandingPageSubContentLeft>
      </AboutPageContent>
    </Fragment>
  )
}
