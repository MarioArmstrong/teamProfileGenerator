const index = require('../index');
const Intern = require('../lib/intern');

describe('Intern', () => {

    describe('getSchool', () => {
        it('should return', () => {
            const expectedSchool = 'SDSU';
            const intern = new Intern('Joe', 6, "foo@bar.com", expectedSchool);
            expect(intern.getSchool()).toBe(expectedSchool);
        });
    })
    
    describe('getRole', () => {
        it('should return', () => {
            expect();
        });

    })

});//END describe