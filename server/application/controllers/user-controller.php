<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller{
	function createUser(){
		$usersData = json_decode(file_get_contents("php://input"));
		$this->load->model('User_model');
		$res = $this->User_model->newUserAdd($usersData);
		echo json_encode($res);
	}
}