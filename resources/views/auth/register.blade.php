@extends('layouts.app')

@section('content')
<div class="container">
	<div class="header-container">
		 <h1>Registration Form</h1>
		 <div class="spacing"></div>
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<div class="row">
					<div class="col-lg-12">
					<form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
								{{ csrf_field() }}
								<div class="form-group{{ $errors->has('firstname') ? ' has-error' : '' }}">
										<input id="firstname" placeholder="First Name" tabindex="1" type="text" class="form-control" name="firstname" value="{{ old('firstname') }}">
										@if ($errors->has('firstname'))
											<span class="help-block">
												<strong>{{ $errors->first('firstname') }}</strong>
											</span>
										@endif
								</div>
								<div class="form-group{{ $errors->has('lastname') ? ' has-error' : '' }}">
										<input id="lastname" placeholder="Last Name" tabindex="1" type="text" class="form-control" name="lastname" value="{{ old('lastname') }}">
										@if ($errors->has('lastname'))
											<span class="help-block">
												<strong>{{ $errors->first('lastname') }}</strong>
											</span>
										@endif
								</div>
								<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
										<input id="email" placeholder="Email" tabindex="1" type="email" class="form-control" name="email" value="{{ old('email') }}">
										@if ($errors->has('email'))
											<span class="help-block">
												<strong>{{ $errors->first('email') }}</strong>
											</span>
										@endif
								</div>
								<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
										<input id="password" placeholder="Password" tabindex="1" type="password" class="form-control" name="password">
										@if ($errors->has('password'))
											<span class="help-block">
												<strong>{{ $errors->first('password') }}</strong>
											</span>
										@endif
								</div>
								<div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
										<input id="password-confirm" placeholder="Password" tabindex="1" type="password" class="form-control" name="password_confirmation">
										@if ($errors->has('password_confirmation'))
											<span class="help-block">
												<strong>{{ $errors->first('password_confirmation') }}</strong>
											</span>
										@endif
								</div>
								<div class="form-group">
								<div class="spacing"></div>
									<div class="row">
										<div class="col-sm-6 col-sm-offset-3">
											<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="btn btn-warning btn-lg center-block" value="Register Now">
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
