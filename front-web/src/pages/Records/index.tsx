import Axios from 'axios';
import React, { useEffect } from 'react';
import axios from 'axios';
import './styles.css';


const BASE_URL = 'http://localhost:8080';


//useEffect() => {
//    axios.get(`${BASE_URL}/records?linesPerPage=12`)        
//};

const Records = () => (
    <div className="page-container">
        <table className="record-table" cellPadding="0" cellSpacing="0" >
            <thead>
                <th>INSTANTE</th>
                <th>NOME</th>
                <th>IDADE</th>
                <th>PLATAFORMA</th>
                <th>GENERO</th>
                <th>TITULO DO GAME</th>
            </thead>
            <tbody>
                <tr>
                    <td>20/08/2020 13:45</td>
                    <td>Washington Soares</td>
                    <td>25</td>
                    <td>XBOX</td>
                    <td>Ação - aventura</td>
                    <td>The last os US</td>
                </tr>
                <tr>
                    <td>20/08/2020 13:48</td>
                    <td>Emerson Borges</td>
                    <td>47</td>
                    <td>XBOX</td>
                    <td>Ação - aventura</td>
                    <td>The last os US</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default Records;
