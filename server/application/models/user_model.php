<?php
class User_model extends CI_Model{
	function newUserAdd($usersData){
		$this->db->select('*');
		$this->db->where('email',$usersData->email);
		$query = $this->db->get('users');
		if ($query->num_rows() > 0) {
			return false;
		}else{
			$this->db->set('fName', $usersData->fname);
			$this->db->set('lName', $usersData->lname);
			$this->db->set('email', $usersData->email);
			$this->db->set('phone', $usersData->phone);
			$this->db->set('password', md5($usersData->password));
			$this->db->set('role', $usersData->role);
			$this->db->set('active', $usersData->active);
			$this->db->insert('users');
			return true;
		}
	}
}
?>