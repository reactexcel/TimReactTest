import './App.css';
import InfoCard from './components/InfoCard';

function App() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex justify-between gap-8">
				<div>
					<InfoCard
						classStyle={'border border-1 border-[#E6ECEF] w-80'}
						style={'text-lg'}
						nameStyle={'text-2xl'}
					/>

					<InfoCard
						classStyle={'border border-1 border-[#E6ECEF] w-56'}
						numberStyle={'text-[#616D86]'}
						style={'text-base'}
						nameStyle={'text-xl'}
					/>
				</div>
				<div>
					<InfoCard
						classStyle={
							'border border-1 border-[#E6ECEF] w-80 shadow shadow-lg'
						}
						style={'text-lg'}
						nameStyle={'text-2xl'}
					/>
					<InfoCard
						classStyle={
							'border border-1 border-[#E6ECEF] w-56 shadow shadow-lg'
						}
						numberStyle={'text-[#616D86]'}
						style={'text-base'}
						nameStyle={'text-xl'}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
