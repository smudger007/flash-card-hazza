import React from 'react';
import CardOperations from './CardOperations';
import CardsListFilters from './CardsListFilters';
import CardsList from './CardsList';


// Need to add <CardsList /> below, after <CardsListFilters />

const DashboardPage = () => (
    <div>       
        <CardOperations />     
        <CardsListFilters />
        <CardsList />
    </div>
);

export default DashboardPage;