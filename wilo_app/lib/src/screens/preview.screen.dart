import 'package:flutter/material.dart';

class PreviewScreen extends StatefulWidget {
  @override
  _PreviewScreenState createState() => _PreviewScreenState();
}

class _PreviewScreenState extends State<PreviewScreen> {
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
      body: Stack(
        children: [
          SizedBox.expand(
            child: Image.network(
              'https://privatecartransferhoian.com/wp-content/uploads/2019/05/Linh-Ung-Pagoda-in-Son-Tra-Peninsula-5.jpg',
            ),
          ),
          Positioned(
            bottom: 20,
            left: 20,
            child: Container(
              decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.5),
                borderRadius: BorderRadius.circular(5),
              ),
              margin: EdgeInsets.all(20),
              padding: EdgeInsets.all(10),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 100,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.cloud_upload_outlined,
                          color: Colors.white,
                        ),
                        SizedBox(
                          height: 5,
                        ),
                        Text(
                          'Upload another image',
                          style: TextStyle(color: Colors.white),
                          textAlign: TextAlign.center,
                        )
                      ],
                    ),
                  ),
                  Container(
                    width: 100,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.check_circle_outline,
                          color: Colors.white,
                        ),
                        SizedBox(
                          height: 5,
                        ),
                        Text(
                          'Use this image',
                          style: TextStyle(color: Colors.white),
                        )
                      ],
                    ),
                  ),
                  Container(
                    width: 100,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.crop,
                          color: Colors.white,
                        ),
                        SizedBox(
                          height: 5,
                        ),
                        Text(
                          'Crop',
                          style: TextStyle(color: Colors.white),
                        )
                      ],
                    ),
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
