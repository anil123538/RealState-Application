import React from 'react'

function BlogList() {
    const real = [
        {
          title: "Rent Control Act, Kerala: Ensuring a Stable Rental Market for All",
          date: "May 24, 2024",
          author: "Suju",
        },
        {
          title: "Rent Slip: Your Guide to Creating a Clear and Concise Document",
          date: "May 16, 2024",
          author: "Suju",
        },
        {
          title: "A Room Rent Receipt Format for Easy HRA Claims: Taxes Made Simple",
          date: "May 16, 2024",
          author: "Suju",
        },
        {
          title: "Rent Receipt Format: The Key to a Smooth Landlord-Tenant Relationship",
          date: "May 16, 2024",
          author: "Suju",
        },
        {
          title: "Types of Rental Properties: A Guide for Landlords and Tenants",
          date: "May 8, 2024",
          author: "Priyanka Saha",
        },
        {
          title: "Delhi Rental Yield Demystified: How to Calculate and Boost Your Returns",
          date: "April 20, 2024",
          author: "Prakhar Sushant",
        },
        {
          title: "Exploring Rental Yield in Mumbai's Property Market",
          date: "April 20, 2024",
          author: "Prakhar Sushant",
        },
        {
          title: "Rental Yield in Bangalore's Real Estate Market: Unlock Max Potential",
          date: "April 20, 2024",
          author: "Prakhar Sushant",
        },
        {
          title: "Best App For Rent House in Bangalore: List of Top 10 Apps",
          date: "April 18, 2024",
          author: "Jessica Solomon",
        },
        {
          title: "10 Best Apps to Rent a House in Hyderabad in 2024",
          date: "April 18, 2024",
          author: "Jessica Solomon",
        },
      ];
  return (
    
    <>
      <div
      style={{
        maxHeight: "420px",
        overflowY: "scroll",
        borderRadius: "5px",
      }}
    >
      {real.map((article, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderBottom: "1px solid black",
          }}
        >
          <h4 style={{ margin: "0",fontWeight:'600', fontSize: "14px" }}>{article.title}</h4>
          <p style={{ margin: "5px 0",fontWeight:'600', fontSize: "12px" }}>
            {article.date} 
            <strong style={{ margin: "5px 0",fontWeight:'600', fontSize: "12px", color: "red" }}> {article.author}</strong> 
          </p>
        </div>
      ))}
    </div>
    </>
  )
}

export default BlogList
