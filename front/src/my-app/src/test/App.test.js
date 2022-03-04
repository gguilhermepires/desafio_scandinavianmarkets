import { render, screen } from '@testing-library/react';
import App from '../App';

test('Healtcheck initial page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Coin market/i);
    expect(linkElement).toBeInTheDocument();
});



