@extends('layouts.app')

@section('content')
<div class="container">
	<div class="header-container">
		 <h1>Login Form</h1>
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<div class="panel panel-default">
						<div class="panel-body">
							<form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
								{{ csrf_field() }}

								<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
									<div class="col-md-12">
										<input id="email" placeholder="Email" type="email" class="form-control" name="email" value="{{ old('email') }}">

										@if ($errors->has('email'))
											<span class="help-block">
												<strong>{{ $errors->first('email') }}</strong>
											</span>
										@endif
									</div>
								</div>

								<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
									<div class="col-md-12">
										<input id="password" placeholder="Password" type="password" class="form-control" name="password">

										@if ($errors->has('password'))
											<span class="help-block">
												<strong>{{ $errors->first('password') }}</strong>
											</span>
										@endif
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-sm-6 col-sm-offset-3">
											<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="btn btn-warning btn-lg center-block" value="Login">
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	</div>
</div>
@endsection