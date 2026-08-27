
import Card from './components/Card'
import User from './components/User'
import Button from './components/Button/Button'
import Header from './components/Header/Header'




const App = () => {
  const arr = [{name:'sufiyan'},{name:'amolak'},{name:'ahsan'}];
  const nums = [10,20,30,40];

  const jobOpenings = [
  {
    brandLogo: "https://www.google.com/favicon.ico",
    companyName: "Google",
    posted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.microsoft.com/favicon.ico",
    companyName: "Microsoft",
    posted: "5 days ago",
    post: "Software Engineer II",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.amazon.com/favicon.ico",
    companyName: "Amazon",
    posted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.meta.com/favicon.ico",
    companyName: "Meta",
    posted: "10 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.apple.com/favicon.ico",
    companyName: "Apple",
    posted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.netflix.com/favicon.ico",
    companyName: "Netflix",
    posted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.nvidia.com/favicon.ico",
    companyName: "NVIDIA",
    posted: "4 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.ibm.com/favicon.ico",
    companyName: "IBM",
    posted: "6 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://www.oracle.com/favicon.ico",
    companyName: "Oracle",
    posted: "8 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$46/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.salesforce.com/favicon.ico",
    companyName: "Salesforce",
    posted: "10 weeks ago",
    post: "Software Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  }
];
  return (

    <div className='parent'>
    {jobOpenings.map(function(el,idx){
      console.log(el.companyName)
      return (
      <div key={idx}>
        
      <Card  brandLogo={el.brandLogo} company={el.companyName} post={el.post} time={el.posted} tag1={el.tag1} tag2={el.tag2} pay={el.pay} location={el.location} />
      
      </div>
      );
    })}
   
    </div>
    
  )
}

export default App
