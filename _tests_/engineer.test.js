const index = require('../index');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    
    describe('getGithub', () => {
        it('should return', () => {
            const expectedGithub = 'fooBar';
            const engineer = new Engineer('Joe', 5, 'foo@bar.com', expectedGithub)
            expect(engineer.getGithub()).toBe(expectedGithub);
        });
    });

    describe('getRole', () => {
        it('should return', () => {
            const expectedRole = 'engineer';
            const engineer = new Engineer('Joe', 5, 'foo@bar.com', 'fooBar')
            expect(engineer.getRole()).toBe(expectedRole);
        });
    });
});//END describe