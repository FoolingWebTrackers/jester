class SecurityService {

    generateSalt(){
        const array = new Uint8Array(256); 
        crypto.getRandomValues(array); 
        return Array.from(array) 
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join('');
    }

    async hashPassword(password, salt) {
        const encoder = new TextEncoder();
        const combinedData = encoder.encode(password + salt);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', combinedData);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join(''); 
    }
    
}