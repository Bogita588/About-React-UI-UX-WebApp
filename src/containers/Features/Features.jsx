import React from 'react'
import './features.css'
import Feature  from '../../components/feature/Feature'

const featuresData =[
    {
        title: 'React-The Complete Guide:Academind',
        text: 'This is a paid Udemy course where you will learn everything there is to know about React. It has more than 45 hours of content and it received a big update recently.',
    },
    {
        title: 'Learn React: CodeAcademy',
        text: 'This website has multiple free courses on React. It has an interactive editor where you can directly see the output of your code and get feedback.',
    },
    {
        title: 'Full Modern React Tutorial: Net Ninja',
        text: 'Full Modern React is a free course on youtube that covers all the basics of React. It shows you step-by-step how to set up a React app and the best practices for creating components and adding styles.',
    },
    {
        title: 'React Beta Docs',
        text: 'In these docs, there are many different examples for you to try out and an interactive editor to play with the different functions in real-time. The website is almost finished, you can track the progress on GitHub.',
    },

]

 const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
            <h1>How to Learn React From Scratch</h1>
            <p>React’s community is one of the biggest out there, and it keeps growing every year. Because of this, there are a vast amount of courses and tutorials out there. Trying to choose one can become overwhelming quickly. With thousands of online resources to get you started, here are some of the resources:</p>

        </div>
        <div className="gpt__features-container">
            {featuresData.map(( item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />

            ))}

        </div>
    </div>
    
  )
}

export default Features
