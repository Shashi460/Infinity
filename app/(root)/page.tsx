import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {firstName : 'Shashi' , lastName : 'Ala' ,email : 'shashiala1111@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type ="greeting"
            title="Welcome"
            user={loggedIn ?.firstName || 'Guest' }
            subtext = "Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts ={[]}
            totalBanks ={1}
            totalCurrentBalance = {25050.50}
          />
        </header>
        RECENT TRANSCATIONS
      </div>
      <RightSidebar 
  user={loggedIn} 
  transactions={[]} 
  banks={[{ id: 1 , currentBalance : 50000 }, { id: 1, currentBalance : 50000 }]}
/>

    </section>
  )
}

export default Home