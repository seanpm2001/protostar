#[test]
fn test_declare() {
   match declare('test') {
      Result::Ok(class_hash) => {
        assert(class_hash == 123, 'check class_hash');
        ()
      },
      Result::Err(x) => {
         let mut data = array_new::<felt>();
         array_append::<felt>(ref data, x);
         panic(data)
      },
   }
}
