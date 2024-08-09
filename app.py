from flask import Flask, request, jsonify
import joblib
import pandas as pd


app = Flask(__name__)
model = joblib.load('rating_model.pkl')
scaler = joblib.load('scaler.pkl')

@app.route('/patient-rating', methods=['POST'])
def patient_satisfaction_rating():
    data = request.get_json() 
    patient_df = pd.DataFrame(data)  
    
    patient_df_scaled = scaler.transform(patient_df)
    prediction = model.predict(patient_df_scaled)
    
    if int(prediction[0]) > 3 and prediction[0] < 4:
        result = "Good"
    elif prediction > 4 :
        result = "Excellent"
    else :
        result = "Bad"
    
    return jsonify({'Predictions': prediction[0],'Review' : result}) 


if __name__ == '__main__':
    app.run(debug=True)