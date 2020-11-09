import 'package:flutter/material.dart';
import 'package:wilo_app/src/screens/preview.screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        leading: Icon(
          Icons.explore,
          size: 28,
        ),
        title: Text('WiLo'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'WiLo',
              style: TextStyle(
                color: Colors.blue,
                fontSize: 28,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            Text(
              'Find landmarks by its image.',
              style: TextStyle(
                color: Colors.blue,
                fontSize: 18,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            Container(
              width: 300,
              child: FlatButton.icon(
                color: Colors.blue,
                textColor: Colors.white,
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => PreviewScreen()),
                  );
                },
                icon: Icon(Icons.cloud_upload),
                label: Text('Upload your image'),
              ),
            )
          ],
        ),
      ),
    );
  }
}
