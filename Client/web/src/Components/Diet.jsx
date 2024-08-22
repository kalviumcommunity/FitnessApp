import React from 'react';
import './Diet.css'; // Import your CSS file for styling

function Diet() {
    return (
      <div className="container">
        <h2 className="section-title">Diet Plans</h2>
  
        <div className="plan-section">
          <h3 className="plan-title">Weight Gain Diet Plan</h3>
          <p className="plan-description">
            To gain weight effectively, focus on consuming more calories than you burn. Here’s a sample plan:
          </p>
          <table className="plan-table">
            <tbody>
              <tr>
                <td>Breakfast:</td>
                <td>2 eggs, 2 slices of whole grain toast, 1 banana</td>
              </tr>
              <tr>
                <td>Mid-Morning Snack:</td>
                <td>Greek yogurt with nuts and honey</td>
              </tr>
              <tr>
                <td>Lunch:</td>
                <td>Grilled chicken breast, brown rice, mixed vegetables</td>
              </tr>
              <tr>
                <td>Afternoon Snack:</td>
                <td>Protein shake with oats and peanut butter</td>
              </tr>
              <tr>
                <td>Dinner:</td>
                <td>Salmon fillet, quinoa, steamed broccoli</td>
              </tr>
              <tr>
                <td>Evening Snack:</td>
                <td>Avocado on whole grain toast</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div className="plan-section">
          <h3 className="plan-title">Weight Loss Diet Plan</h3>
          <p className="plan-description">
            For weight loss, aim to create a caloric deficit by consuming fewer calories than you burn. Here’s an example:
          </p>
          <table className="plan-table">
            <tbody>
              <tr>
                <td>Breakfast:</td>
                <td>Oatmeal with berries and a boiled egg</td>
              </tr>
              <tr>
                <td>Mid-Morning Snack:</td>
                <td>Apple slices with almond butter</td>
              </tr>
              <tr>
                <td>Lunch:</td>
                <td>Mixed green salad with grilled chicken breast</td>
              </tr>
              <tr>
                <td>Afternoon Snack:</td>
                <td>Low-fat yogurt with chia seeds</td>
              </tr>
              <tr>
                <td>Dinner:</td>
                <td>Baked fish with quinoa and steamed vegetables</td>
              </tr>
              <tr>
                <td>Evening Snack:</td>
                <td>Carrot sticks with hummus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Diet;