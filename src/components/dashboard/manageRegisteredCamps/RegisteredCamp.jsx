

const RegisteredCamp = ({registeredCamp}) => {
  const {campFees,campName,participantName} = registeredCamp;
      return (
          <div>
              <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="px-4 py-2">Camp Name</th>
        <th className="px-4 py-2">Camp Fees</th>
        <th className="px-4 py-2">Participant Name</th>
      </tr>
    </thead>
    <tbody>
      
       
          <td className="border px-4 py-2">{campName}</td>
          <td className="border px-4 py-2">{campFees}</td>
          <td className="border px-4 py-2">{participantName}</td>
       
      
    </tbody>
  </table>
          </div>
      );
  };
  
  export default RegisteredCamp;
  
  