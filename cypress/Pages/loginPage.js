class LoginPage{
  visit(){
    cy.visit('/signin') // Use relative URL  //base
} 
cookiepolicy(){ 
cy.contains('Accept').click();  
}

 enterEmail(email){
   
    cy.get('input[type="text"]', { timeout: 10000 }).should('be.visible').type(email);
    
 }
 enterPassword(password){

    cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible').type(password);
    
 }
 clickLogin(){
    cy.get('button[type="submit"]', { timeout: 10000 }).should('be.visible').click();
 }  


 login(email, password){
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
 }
 getErrorMessage(){
    return cy.contains('This email / password combination is invalid'); 
 }  
    
}
export default LoginPage;