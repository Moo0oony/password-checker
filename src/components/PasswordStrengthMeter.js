import React from 'react'

function PasswordStrengthMeter({password}) {
    
    function defineStrength() {
        if (password.length === 0) {
            return 'None';
        } else if (password.length < 8) {
            return 'Weak';
        } else if (/^(?=.*[a-zA-Z])+$/ 
                || /^(?=.*[0-9])+$/
                || /^(?=.*[!@#$%^&*()_+])+$/) {
            return 'Almost Weak';
        } else if (/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(password) 
                || /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z!@#$%^&*()_+]+$/.test(password) 
                || /^(?=.*[0-9])(?=.*[!@#$%^&*()_+])[0-9!@#$%^&*()_+]+$/.test(password)) {
            return 'Medium';
        } else if (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]+$/.test(password)) {
            return 'Strong';
        }
    }

    function isAlmostWeak() {
        if (defineStrength() === 'Almost Weak') {
            return 'red';
        } else {
            return colorifyIndicator();
        }
    }

    function colorifyIndicator() {
        const passwordStrength = defineStrength(password);
        switch (passwordStrength) {
            case 'None':
                return 'gray';
            case 'Weak': 
                return 'red';
            case 'Medium':
                return 'yellow';
            case 'Strong': 
                return 'green';
            default:
                return 'gray';
        }
    }    

    return (
        <div>
            <div className='strength-indicators'>
                <div className="indicator" style={{ backgroundColor: isAlmostWeak()}}></div>
                <div className="indicator" style={{ backgroundColor: colorifyIndicator()}}></div>
                <div className="indicator" style={{ backgroundColor: colorifyIndicator()}}></div>
            </div>
            <p>{defineStrength()}</p>
        </div>
    )
}

export default PasswordStrengthMeter;