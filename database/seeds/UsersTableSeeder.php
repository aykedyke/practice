<?php
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		DB::table('users')->delete();
		
		$users = array(
				array(
					'firstname' => 'Mike',
					'lastname' => 'Baccay',
					'email' => 'mikebaccay@gmail.com',
					'password' => Hash::make('123456')
				)
		);
		DB::table('users')->insert($users);	
    }
}
