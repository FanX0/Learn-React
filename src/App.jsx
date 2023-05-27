import Card from './components/Card';
import Button from './components/Button';
function App() {
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'>
            <div className='max-w-2xl w-full flex items-center gap-4'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium incidunt nulla, mollitia itaque
                        possimus ad consectetur dolorem minima quaerat nesciunt natus perferendis ratione. Velit aliquid
                        repellendus nam non corrupti?
                    </Card.Body>

                    <Card.Footer>
                        <Button className='bg-red-600'>Click Me</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium incidunt nulla, mollitia itaque
                        possimus ad consectetur dolorem minima quaerat nesciunt natus perferendis ratione. Velit aliquid
                        repellendus nam non corrupti?
                    </Card.Body>

                    <Card.Footer>
                        <Button className='bg-red-600'>Click Me</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
